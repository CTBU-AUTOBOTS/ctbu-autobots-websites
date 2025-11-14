# 汽车人协会网站贡献指南

欢迎参与重庆工商大学汽车人协会网站的建设！请仔细阅读以下指南，以确保高效协作。

## 项目结构

本项目采用**单分支多目录架构**，所有代码统一管理在 `main` 分支，不同目录负责不同站点：

| 站点/目录 | 用途 | 技术栈 | 部署地址 |
|------|------|--------|----------|
| `apps/home` | 协会主站、博客、新闻动态 | Astro + Mizuki | [https://www.autobot5.site](https://www.autobot5.site) |
| `apps/docs` | 技术文档、教程、项目说明 | VuePress + Theme Plume | [https://docs.autobot5.site](https://docs.autobot5.site) |
| `shared` | 跨应用共享资源 | - | - |
| `.github` | CI/CD 工作流 | - | - |

**⚠️ 重要：请勿将代码提交到错误的目录！**

## 贡献流程

### 1. 确认修改内容所属目录

- **博客/新闻/动态/协会介绍** → `apps/home` 目录
- **技术文档/教程/开发规范** → `apps/docs` 目录
- **共享资源/工具/设计系统** → `shared` 目录
- **CI/CD 工作流/配置** → `.github` 目录

### 2. 创建分支

```bash
# 从 main 分支创建特性分支
git checkout main
git pull origin main
git checkout -b feat/<scope>/your-feature-name
# 例如: post/home/new-blog-post 或 post/docs/ros-tutorial-update