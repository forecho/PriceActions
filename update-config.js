#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置文件路径
const configPath = path.join(__dirname, 'docs', '.vitepress', 'config.js');

// 目录映射表（目录ID到显示名称的映射）
const directoryTitles = {
    '01-terminology': '术语',
    '02-chart-basics': '图表基础和价格行为',
    '03-forex-basics': '外汇基础',
    '04-my-setup': '我的设置',
    '05-program-trading': '程序化交易',
    '06-personality-traits': '成功交易者的性格特质',
    '07-starting-out': '入门',
    '08-candles-setups': '蜡烛图设置和信号棒',
    '09-pullbacks-counting': '回调和数K线',
    '09-buying-selling-pressure': '买卖压力',
    '10-gaps': '缺口',
    '11-market-cycle': '市场周期',
    '12-always-in': 'Always In',
    '13-trends': '趋势',
    '14-breakouts': '突破',
    '15-channels': '通道',
    '16-tight-channels': '紧密通道',
    '17-trading-ranges': '交易区间',
    'price-action-all-in-one': '价格行为全解',
    'mes-recap': 'MES回顾'
};

// 按章节对目录进行分组
const categoryGroups = {
    '基础知识': ['01-terminology', '02-chart-basics', '03-forex-basics', '04-my-setup', '05-program-trading', '06-personality-traits'],
    '交易技巧': ['07-starting-out', '08-candles-setups', '09-pullbacks-counting', '09-buying-selling-pressure', '10-gaps', '11-market-cycle', '12-always-in', '13-trends', '14-breakouts', '15-channels', '16-tight-channels', '17-trading-ranges'],
    '总结': ['price-action-all-in-one'],
    '其他资源': ['mes-recap']
};

// 检查目录是否存在
function checkDirectory(dir) {
    try {
        return fs.statSync(dir).isDirectory();
    } catch (e) {
        return false;
    }
}

// 生成侧边栏配置
function generateSidebar() {
    const docsDir = path.join(__dirname, 'docs');
    const sidebar = [];

    // 遍历分组
    for (const [category, dirs] of Object.entries(categoryGroups)) {
        const categoryItems = [];

        // 遍历每个目录
        for (const dir of dirs) {
            const fullDir = path.join(docsDir, dir);

            if (!checkDirectory(fullDir)) {
                continue;
            }

            const files = fs.readdirSync(fullDir);
            const mdFiles = files.filter(file => file.endsWith('.md'));

            // 目录标题
            const dirTitle = directoryTitles[dir] || dir;

            // 如果只有一个index.md文件，则作为简单链接
            if (mdFiles.length === 1 && mdFiles[0] === 'index.md') {
                categoryItems.push({
                    text: dirTitle,
                    link: `/${dir}/`
                });
            }
            // 否则创建一个带有子项的目录
            else if (mdFiles.length > 0) {
                const subItems = [];

                // 按文件名排序
                mdFiles.sort((a, b) => {
                    // 确保index.md在最前面
                    if (a === 'index.md') return -1;
                    if (b === 'index.md') return 1;
                    return a.localeCompare(b);
                });

                // 遍历markdown文件并添加到子项中
                for (const file of mdFiles) {
                    const fileName = path.parse(file).name;
                    let displayName = fileName;

                    // 提取字母部分作为显示名（如 "02a" -> "A"）
                    if (fileName.match(/^\d+[a-z]$/)) {
                        const letter = fileName.slice(-1).toUpperCase();
                        displayName = `${dirTitle} ${letter}`;
                    } else if (fileName === 'index') {
                        displayName = `${dirTitle} 概述`;
                        continue; // 跳过 index.md，不在子项中显示
                    }

                    const link = file === 'index.md'
                        ? `/${dir}/`
                        : `/${dir}/${fileName}`;

                    subItems.push({
                        text: displayName,
                        link: link
                    });
                }

                // 只有在有子项时才添加折叠菜单
                if (subItems.length > 0) {
                    categoryItems.push({
                        text: dirTitle,
                        collapsed: false,
                        items: subItems
                    });
                } else {
                    // 没有子项就添加简单链接
                    categoryItems.push({
                        text: dirTitle,
                        link: `/${dir}/`
                    });
                }
            }
        }

        // 只有在有项目时才添加分类
        if (categoryItems.length > 0) {
            sidebar.push({
                text: category,
                items: categoryItems
            });
        }
    }

    return sidebar;
}

// 生成新的配置文件内容
function generateConfig() {
    const sidebar = generateSidebar();

    return `// https://vitepress.dev/reference/site-config
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

    sidebar: ${JSON.stringify(sidebar, null, 6)},

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
}

// 检查 VitePress 配置目录是否存在
const configDir = path.dirname(configPath);
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

// 生成并写入新的配置内容
try {
    const newConfig = generateConfig();
    fs.writeFileSync(configPath, newConfig);
    console.log('\x1b[32m%s\x1b[0m', '✅ VitePress 配置文件已更新！');
} catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '❌ 更新 VitePress 配置文件时出错:', error);
} 