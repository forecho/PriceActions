# PriceActions Summary Generator

使用 AI 将 SRT 字幕文件转换为 Markdown 摘要的工具。

## 功能特性

- 自动将 SRT 字幕文件转换为结构化的 Markdown 摘要
- 支持多种 AI 模型（通过 OpenRouter API）
- 智能重试机制，自动处理 API 限制
- 批量处理多个 SRT 文件
- 避免生成空文件

## 安装配置

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

创建 `.env` 文件并添加以下配置：

```bash
# OpenRouter API 配置
# 获取API密钥：https://openrouter.ai/keys
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 3. 获取 OpenRouter API 密钥

1. 访问 [OpenRouter](https://openrouter.ai/)
2. 注册账户并登录
3. 在 [API Keys](https://openrouter.ai/keys) 页面创建新的 API 密钥
4. 将密钥复制到 `.env` 文件中

## 使用方法

### 基本用法

```bash
npm run generate
```

或者直接运行：

```bash
node generate-summary.js
```

### 工作原理

1. 脚本会读取项目根目录下的所有 `.srt` 文件
2. 使用 `09C Pullbacks and Bar Counting.md` 作为参考格式
3. 为每个没有对应 Markdown 文件的 SRT 文件生成摘要
4. 生成的 Markdown 文件会保存在同一目录下

## 支持的 AI 模型

通过 OpenRouter，您可以使用多种 AI 模型：

- **openai/gpt-4o** - 最强大但成本较高
- **openai/gpt-4o-mini** - 推荐，性价比高
- **anthropic/claude-3.5-sonnet** - Claude 3.5 Sonnet
- **meta-llama/llama-3.1-8b-instruct** - Llama 3.1 8B
- **google/gemini-2.0-flash-exp** - Gemini 2.0 Flash

要更换模型，请修改 `generate-summary.js` 文件中的 `model` 参数。

## 错误处理

- **API 限制**：自动重试机制，指数退避策略
- **空内容检测**：跳过生成空文件
- **请求间隔**：自动在请求之间添加延迟

## 注意事项

- 确保参考文件 `09C Pullbacks and Bar Counting.md` 存在
- OpenRouter 有使用配额限制，请查看其定价页面
- 建议在非高峰期使用，避免触发 API 限制

## 故障排除

### 常见问题

1. **API 密钥错误**：检查 `.env` 文件中的 API 密钥是否正确
2. **配额超限**：等待一段时间后重试，或升级 OpenRouter 计划
3. **网络错误**：检查网络连接，确保可以访问 OpenRouter API

### 获取帮助

- [OpenRouter 文档](https://openrouter.ai/docs)
- [OpenRouter 定价](https://openrouter.ai/pricing)
- [OpenRouter 支持](https://openrouter.ai/support)





