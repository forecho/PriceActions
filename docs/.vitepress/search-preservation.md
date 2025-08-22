# 搜索配置保持说明

## 问题描述

当你运行 `npm run migrate` 命令时，`update-config.js` 脚本会重新生成 VitePress 配置文件，这会覆盖掉手动添加的搜索配置。

## 解决方案

我已经修改了 `update-config.js` 脚本，现在它会自动包含搜索配置。具体修改如下：

### 1. 脚本已更新

`update-config.js` 脚本现在包含完整的搜索配置：

```javascript
// 配置搜索功能
search: {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    // MiniSearch 配置选项
    miniSearch: {
      options: {
        // 使用默认的字段提取器
      },
      searchOptions: {
        fuzzy: 0.2,        // 模糊匹配阈值
        prefix: true,      // 启用前缀搜索
        boost: {           // 搜索结果权重
          title: 4,        // 标题权重最高
          text: 2,         // 正文内容权重
          titles: 1        // 标题层级权重
        }
      }
    },
    // 排除特定页面或路径
    exclude: (path) => {
      return path.startsWith('/mes-recap/') ||
        path.startsWith('/qa-summary/') ||
        path.includes('search-config')
    }
  }
}
```

### 2. 现在可以安全运行

```bash
# 这些命令现在都会保持搜索配置
npm run migrate
node update-config.js
```

### 3. 如果需要修改搜索配置

如果你需要调整搜索配置，请修改 `update-config.js` 文件中的相应部分，而不是直接修改 `docs/.vitepress/config.js`。

## 配置说明

### 搜索功能特性

1. **本地搜索**：使用浏览器内置索引，无需外部服务
2. **中文界面**：完全中文化的搜索界面
3. **智能搜索**：支持模糊匹配和前缀搜索
4. **权重优化**：标题内容优先显示
5. **页面排除**：自动排除不需要搜索的页面

### 排除的页面

- `/mes-recap/` 路径下的所有页面
- `/qa-summary/` 路径下的所有页面
- 包含 `search-config` 的页面

## 最佳实践

1. **不要直接修改** `docs/.vitepress/config.js`
2. **修改** `update-config.js` 脚本来调整配置
3. **运行** `npm run migrate` 来应用更改
4. **测试** 搜索功能是否正常工作

## 故障排除

如果搜索功能出现问题：

1. 检查 `update-config.js` 中的搜索配置
2. 运行 `npm run migrate` 重新生成配置
3. 重启开发服务器 `npm run docs:dev`
4. 检查浏览器控制台是否有错误

## 未来扩展

如果需要更强大的搜索功能，可以在 `update-config.js` 中添加：

- Algolia DocSearch 配置
- Pagefind 插件配置
- 自定义搜索算法
- 多语言搜索支持

---

*现在你可以安全地运行 `npm run migrate` 而不用担心丢失搜索配置了！*
