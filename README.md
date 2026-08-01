# 尚硅谷 AI 课程笔记

尚硅谷 Python / LangChain / LangGraph 课程配套课件与代码整理

## 在线站点

https://xbsheng.github.io/atguigu-note/

本地预览：

```bash
pnpm install
pnpm docs:dev
```

## 课程目录

| 课程                      | 说明                                        | 在线视频                                                    | 详情                            |
| ------------------------- | ------------------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| [Python](./python/)       | Python 零基础入门到进阶（进程 / 线程 / 协程） | [BV1tDsgzxECr](https://www.bilibili.com/video/BV1tDsgzxECr) | [README](./python/README.md)    |
| [LangChain](./langchain/) | LangChain 1.2 入门到 Agent / RAG 实战       | [BV1rv7A6oEeP](https://www.bilibili.com/video/BV1rv7A6oEeP) | [README](./langchain/README.md) |
| [LangGraph](./langgraph/) | LangGraph 入门到智能体部署实战        | [BV1z3NY66EY1](https://www.bilibili.com/video/BV1z3NY66EY1) | [README](./langgraph/README.md) |

## 仓库结构

```text
atguigu-note/
├── index.md              # 站点首页
├── .vitepress/           # VitePress 配置
├── .github/workflows/    # GitHub Pages 自动部署
├── python/               # Python 课件（按章节拆分）+ 代码 + 分 P 目录
├── langchain/            # LangChain 课件 + 代码 + 分 P 目录
└── langgraph/            # LangGraph 课件 + 代码 + 分 P 目录
```

站点直接复用各课程下的 `课件/` Markdown，无需复制文件。

## 学习建议

1. 打开站点或对应课程 README，按分 P 在 B 站在线观看
2. 对照课件复习笔记
3. 打开 `代码/` 中的 Notebook 动手跟练

## 版权说明

课程版权归 [尚硅谷](http://www.atguigu.com/) 所有，本仓库仅供学习交流使用。
