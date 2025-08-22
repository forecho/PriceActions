# VitePress 搜索功能配置说明

## 当前配置

我们已经在 `docs/.vitepress/config.js` 中配置了本地搜索功能，具体配置如下：

### 基本搜索配置

```javascript
search: {
  provider: 'local',  // 使用本地搜索
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
    }
  }
}
```

### MiniSearch 高级配置

```javascript
miniSearch: {
  options: {
    extractField: (document, fieldName) => {
      if (fieldName === 'title') {
        return document.title || ''
      }
      if (fieldName === 'text') {
        return document.text || ''
      }
      if (fieldName === 'titles') {
        return document.titles || []
      }
      return ''
    }
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
}
```

## 功能特性

### 1. 本地搜索
- 使用浏览器内置索引进行模糊全文搜索
- 基于 minisearch 实现
- 无需外部服务，完全免费

### 2. 中文界面
- 搜索按钮：显示"搜索文档"
- 无结果提示：显示"无法找到相关结果"
- 清除按钮：显示"清除查询条件"

### 3. 智能搜索
- 模糊匹配：支持拼写错误和近似匹配
- 前缀搜索：输入部分内容即可搜索
- 权重排序：标题内容优先显示

## 使用方法

1. 在导航栏中点击搜索图标（放大镜）
2. 输入要搜索的关键词
3. 搜索结果会实时显示
4. 点击结果可直接跳转到对应页面

## 搜索范围

搜索功能会索引以下内容：
- 页面标题
- 页面正文内容
- 标题层级结构
- 侧边栏导航文本

## 排除特定页面

如果某些页面不需要被搜索，可以在页面的 frontmatter 中添加：

```markdown
---
search: false
---
```

## 性能优化

- 搜索索引在构建时生成
- 支持增量更新
- 搜索结果缓存优化

## 未来扩展

如果需要更强大的搜索功能，可以考虑：
1. 切换到 Algolia DocSearch
2. 使用 Pagefind 插件
3. 集成自定义搜索算法

## 测试搜索功能

运行开发服务器测试搜索功能：

```bash
npm run docs:dev
```

搜索框应该出现在导航栏中，并且能够搜索文档内容。
