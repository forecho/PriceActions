# Algolia DocSearch 设置指南

为了使 Algolia 搜索功能正常工作，您需要完成以下步骤：

## 1. 申请 Algolia DocSearch

访问 [Algolia DocSearch](https://docsearch.algolia.com/apply/) 并填写申请表格。您需要提供：

- 您的网站 URL
- 您的网站仓库链接
- 您的文档类型

Algolia 团队会审核您的申请，如果符合条件，他们会为您创建索引并提供必要的凭据。

## 2. 配置 VitePress

收到 Algolia 团队的确认邮件后，您将获得以下信息：

- `appId`
- `apiKey`
- `indexName`

### 对于开源项目的安全配置

由于这是一个开源项目，我们不应该直接在代码中硬编码敏感信息。请按照以下步骤操作：

1. 复制项目根目录中的 `.env.example` 文件并重命名为 `.env`
2. 在 `.env` 文件中填入您的 Algolia 凭据：

```bash
# Algolia 搜索配置
ALGOLIA_APP_ID=您的APP_ID
ALGOLIA_API_KEY=您的API_KEY
ALGOLIA_INDEX_NAME=您的INDEX_NAME
```

3. `.env` 文件已被添加到 `.gitignore` 中，确保不会被提交到公共仓库

### 部署到生产环境

在部署到生产环境时，您需要在部署平台（如 Netlify、Vercel 等）上设置这些环境变量：

- 对于 Netlify：在站点设置的 "Build & deploy" > "Environment variables" 中添加变量
- 对于 Vercel：在项目设置的 "Environment Variables" 部分添加变量
- 对于 GitHub Pages：使用 GitHub Actions secrets 存储这些值

## 3. 自行爬取（可选）

如果您想自己爬取网站并创建索引，可以使用 [Algolia Crawler](https://www.algolia.com/doc/tools/crawler/getting-started/overview/)。

1. 在 [Algolia 控制台](https://dashboard.algolia.com/) 创建一个应用
2. 创建一个索引
3. 创建一个 API 密钥，具有搜索权限
4. 设置爬虫配置

### 爬虫配置示例

以下是一个基本的爬虫配置示例：

```json
{
  "index_name": "priceactions",
  "start_urls": ["https://您的网站URL/"],
  "sitemap_urls": ["https://您的网站URL/sitemap.xml"],
  "selectors": {
    "lvl0": {
      "selector": ".sidebar-heading.active",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".content__default h1",
    "lvl2": ".content__default h2",
    "lvl3": ".content__default h3",
    "lvl4": ".content__default h4",
    "lvl5": ".content__default h5",
    "text": ".content__default p, .content__default li"
  }
}
```

## 4. 本地测试

完成配置后，运行开发服务器测试搜索功能：

```bash
npm run docs:dev
```

搜索框应该出现在导航栏中，并且能够搜索您的文档内容。

## 注意事项

- Algolia DocSearch 是免费的，但有一定的使用限制
- 确保您的网站是公开可访问的，以便 Algolia 爬虫能够索引内容
- 索引更新通常每周进行一次
- 对于开源项目，请务必保护您的 API 密钥，不要将其直接提交到公共仓库 