# 价格行为交易文档

## 项目简介

本项目是根据 Al Brooks 的《Price Action Fundamentals》系列视频字幕，使用 AI 进行的总结。使用 VitePress 构建，并通过 GitHub Actions 部署到 Cloudflare Pages。

本项目的创做目的不是取代[官方课程](https://www.brookstradingcourse.com/)，而且为了快速的回顾和复习官方的课程内容，所以请优先看完官方的课程再来看这个内容总结，不然可能会有点懵逼。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产构建
npm run docs:preview
```

## 部署到 Cloudflare Pages

该项目配置了 GitHub Actions 工作流，当代码推送到 main 分支时会自动构建并部署到 Cloudflare Pages。

### 配置部署

1. 在 GitHub 仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API 令牌（需要 Pages 权限）
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare 账户 ID

2. 在 Cloudflare Pages 中创建一个名为 `priceactions` 的项目

3. 推送代码到 main 分支即可触发自动部署

## 项目结构

```
.
├── docs/                       # VitePress 文档目录
│   ├── .vitepress/             # VitePress 配置
│   ├── 01-terminology/         # 术语
│   │   └── index.md
│   ├── 02-chart-basics/        # 图表基础和价格行为
│   │   ├── 02a.md
│   │   ├── 02b.md
│   │   ├── 02c.md
│   │   └── 02d.md
│   ├── 03-forex-basics/        # 外汇基础
│   │   ├── 03a.md
│   │   ├── 03b.md
│   │   ├── 03c.md
│   │   ├── 03d.md
│   │   └── 03e.md
│   └── ... 
├── .github/workflows/          # GitHub Actions 工作流配置
└── package.json                # 项目配置和依赖
```


## 提示词

```
参考@09C Pullbacks and Bar Counting.md，根据@10B Buying and Selling Pressure.srt @10A Buying and Selling Pressure.srt 总结字幕内容，并创建与字幕文件名同一名称的 .md 文件中

```





