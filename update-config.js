import fs from 'fs';
import path from 'path';

const docsDir = path.resolve(process.cwd(), 'docs');
const configPath = path.resolve(docsDir, '.vitepress/config.js');

// 定义章节映射，用于生成中文标题和分组
const chapterMapping = {
    '01-terminology': { text: '术语', group: '基础知识' },
    '02-chart-basics': { text: '图表基础和价格行为', group: '基础知识' },
    '03-forex-basics': { text: '外汇基础', group: '基础知识' },
    '04-my-setup': { text: '我的设置', group: '基础知识' },
    '05-program-trading': { text: '程序化交易', group: '基础知识' },
    '06-personality-traits': { text: '成功交易者的性格特质', group: '基础知识' },
    '07-starting-out': { text: '入门', group: '交易技巧' },
    '08-candles-setups': { text: 'K线、交易机会和信号K线', group: '交易技巧' },
    '09-pullbacks-counting': { text: '回调和数K线', group: '交易技巧' },
    '10-buying-selling-pressure': { text: '买压和卖压', group: '交易技巧' },
    '11-gaps': { text: '缺口', group: '交易技巧' },
    '12-market-cycle': { text: '市场周期', group: '交易技巧' },
    '13-always-in': { text: 'Always In', group: '交易技巧' },
    '14-trends': { text: '趋势', group: '交易技巧' },
    '15-breakouts': { text: '突破', group: '交易技巧' },
    '16-channels': { text: '通道', group: '交易技巧' },
    '17-tight-channels': { text: '窄通道和微通道', group: '交易技巧' },
    '18-trading-ranges': { text: '震荡区间', group: '交易技巧' },
    '19-support-resistance': { text: '支撑和阻力', group: '交易技巧' },
    '20-measured-moves': { text: '测量移动', group: '交易技巧' },
    '21-reversals': { text: '反转', group: '交易技巧' },
    '22-major-trend-reversals': { text: '主要趋势反转', group: '交易技巧' },
    '23-final-flags': { text: '最终旗形', group: '交易技巧' },
    '24-wedges': { text: '楔形', group: '交易技巧' },
    '25-double-tops-bottoms': { text: '双顶和双底', group: '交易技巧' },
    '26-triangles': { text: '三角形', group: '交易技巧' },
    '27-head-shoulders': { text: '头肩形态', group: '交易技巧' },
    '28-rounded-tops-bottoms': { text: '圆顶和圆底', group: '交易技巧' },
    '29-climaxes': { text: '高潮', group: '交易技巧' },
    '30-trading-setups': { text: '交易设置', group: '如何交易' },
    '31-trading-entries': { text: '交易入场', group: '如何交易' },
    '32-trading-exits': { text: '交易出场', group: '如何交易' },
    '33-protective-stops': { text: '保护性止损', group: '如何交易' },
    '34-actual-risk': { text: '实际风险', group: '如何交易' },
    '35-scaling-in': { text: '分批入场', group: '如何交易' },
    '36-trade-management': { text: '交易管理', group: '如何交易' },
    'price-action-all-in-one': { text: '价格行为全解', group: '总结' },
    'mes-recap': { text: 'MES回顾', group: '其他资源' },
    'qa-summary': { text: '问答总结', group: '其他资源' }
};

function getSidebarItems(dir, parentPath = '') {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const items = [];

    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        const resPath = path.join(parentPath, dirent.name);

        if (dirent.isDirectory()) {
            if (dirent.name === '.vitepress') continue;

            const subItems = getSidebarItems(res, resPath);
            if (subItems.length > 0) {
                // 检查是否有章节映射
                const mapping = chapterMapping[dirent.name];
                if (mapping) {
                    items.push({
                        text: mapping.text,
                        collapsed: false,
                        items: subItems
                    });
                } else {
                    items.push({
                        text: dirent.name.replace(/^\d+-/, '').replace(/-/g, ' '),
                        collapsed: true,
                        items: subItems
                    });
                }
            }
        } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
            const link = '/' + resPath.replace(/\\/g, '/').replace('.md', '');

            // 跳过 index.md 如果它是目录中唯一的文件
            if (dirent.name.toLowerCase() === 'index.md' &&
                dirents.filter(d => d.isFile() && d.name.endsWith('.md')).length === 1) {
                continue;
            }

            // 生成更好的标题
            let text = path.basename(dirent.name, '.md').replace(/^\d+[a-zA-Z]*/, '').trim();
            if (!text) {
                // 如果标题为空，从文件名生成
                const fileName = path.basename(dirent.name, '.md');
                if (fileName.match(/^\d+[a-zA-Z]$/)) {
                    const letter = fileName.slice(-1);
                    const number = fileName.slice(0, -1);
                    text = `${number} ${letter.toUpperCase()}`;
                } else {
                    text = fileName;
                }
            }

            items.push({
                text: text,
                link: link
            });
        }
    }

    return items;
}

function generateSidebar() {
    const dirents = fs.readdirSync(docsDir, { withFileTypes: true });
    const groups = {};

    // 按组分类
    for (const dirent of dirents) {
        if (dirent.isDirectory() && dirent.name !== '.vitepress') {
            const mapping = chapterMapping[dirent.name];
            if (mapping) {
                const group = mapping.group;
                if (!groups[group]) {
                    groups[group] = [];
                }

                const subItems = getSidebarItems(path.resolve(docsDir, dirent.name), dirent.name);
                if (subItems.length > 0) {
                    groups[group].push({
                        text: mapping.text,
                        collapsed: false,
                        items: subItems
                    });
                } else {
                    // 如果没有子项目，直接链接到目录
                    groups[group].push({
                        text: mapping.text,
                        link: `/${dirent.name}/`
                    });
                }
            }
        }
    }

    // 构建最终的 sidebar 配置
    const sidebar = [];

    // 基础知识
    if (groups['基础知识']) {
        sidebar.push({
            text: '基础知识',
            items: groups['基础知识']
        });
    }

    // 交易技巧
    if (groups['交易技巧']) {
        sidebar.push({
            text: '交易技巧',
            items: groups['交易技巧']
        });
    }

    // 如何交易
    if (groups['如何交易']) {
        sidebar.push({
            text: '如何交易',
            items: groups['如何交易']
        });
    }

    // 总结
    if (groups['总结']) {
        sidebar.push({
            text: '总结',
            items: groups['总结']
        });
    }

    // 其他资源
    if (groups['其他资源']) {
        sidebar.push({
            text: '其他资源',
            items: groups['其他资源']
        });
    }

    return sidebar;
}

// 读取配置文件
let configContent = fs.readFileSync(configPath, 'utf-8');
const newSidebar = generateSidebar();

// 创建新的配置文件内容
const newConfigContent = `// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "价格行为交易",
  description: "Al Brooks 的《Price Action Fundamentals》系列视频总结",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/01-terminology/' }
    ],

    sidebar: ${JSON.stringify(newSidebar, null, 2)},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/forecho/PriceActions' }
    ]
  },
  
  // 配置 Markdown
  markdown: {
    lineNumbers: true,
  },
  
  // 使用干净的 URL（没有 .html 后缀）
  cleanUrls: true,
  
  // 部署配置
  base: '/'
})`;

// 写入新的配置文件
fs.writeFileSync(configPath, newConfigContent, 'utf-8');
console.log('VitePress sidebar configuration updated successfully.');