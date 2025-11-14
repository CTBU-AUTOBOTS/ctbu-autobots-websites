# CTBU-AUTOBOTS 汽车人协会网站

🤖 你好，汽车人！

## 简介

这里是 **重庆工商大学 汽车人协会** 官方站点。  
本项目用于集中展示协会主页、技术文档、学习资源、活动视频及开源项目等内容，服务协会成员与校内外技术爱好者。

网站大部分站点采用现代化静态站点技术栈构建，包含：
- **主站**：基于 Astro + Mizuki 主题，用于协会介绍、新闻动态与视觉展示  
  部署地址：https://www.autobot5.site
- **文档站**：基于 VuePress + Theme Plume，提供开发规范、教程与项目说明  
  部署地址：https://docs.autobot5.site
- **资源站**：通过 OpenList 整合第三方网盘（如蓝奏云、阿里云盘）提供资料下载  
  部署地址：https://cloud.autobot5.site

本仓库即为网站源码，所有内容均以 Markdown 编写，欢迎参与共建！

## 仓库结构

本仓库已配置 **Cloudflare Pages 自动部署**。  
您每次向分支推送代码，Cloudflare 会自动拉取、构建并发布最新版本，**无需手动部署**。

本项目采用 **多分支架构**，而非 Monorepo：

| 分支   | 内容         | 技术栈                 |
| ------ | ------------ | ---------------------- |
| `home` | 协会主站源码 | Astro + Mizuki         |
| `docs` | 技术文档源码 | VuePress + Theme Plume |

 **⚠️⚠️⚠️请勿在错误分支提交代码！** 

> - 博客内容 → `home` 分支
> - 文档内容 → `docs` 分支

## **主页 - home** 站点开发

### 本地开发

您需要确保系统满足以下要求：

- **Node.js >= 20**
- **pnpm >= 9**
- **Git**

#### 安装 Node.js

访问 Node.js 官网 下载并安装最新版本的 Node.js。建议使用 LTS 版本。

安装完成后，打开终端或命令提示符，运行以下命令验证 Node.js 是否安装成功：

```bash
node -v
npm -v
```

如果显示版本号，则表示安装成功。

#### 安装 pnpm

如果您尚未安装 pnpm，可以通过 npm 安装：

```bash
npm install -g pnpm
```

安装完成后，打开终端或命令提示符，运行以下命令验证 pnpm 是否安装成功：

```bash
pnpm -v
```


如果显示版本号，则表示安装成功。

#### 安装 Git

访问 Git 官网 下载并安装适合您操作系统的 Git 版本。

安装完成后，打开终端或命令提示符，运行以下命令验证 Git 是否安装成功：

```bash
git --version
```

如果显示版本号，则表示安装成功。

### 本地调试

#### 克隆项目

首先，克隆主站（home 分支）项目到本地：

```bash
git clone -b home https://github.com/CTBU-AUTOBOTS/ctbu-autobots-websites.git ctbu-home
cd ctbu-home
```

#### 安装依赖

使用 pnpm 安装项目依赖：

```bash
pnpm install
```

#### 配置博客

在启动项目之前，您需要根据自己的需求进行配置：

#### 启动开发服务器

运行以下命令启动开发服务器：

```
pnpm dev
```

启动成功后，您可以在浏览器中访问 http://localhost:4321 查看，推送到 home 分支应用到主页

## 贡献

我们热烈欢迎汽车人协会成员及校内外开发者参与网站共建！  
无论是修复错别字、补充教程、优化样式，还是新增功能模块，都可通过以下方式参与：

- 🐞 提交 Issue 反馈问题或提出建议  
- ✨ 提交 Pull Request 贡献内容或代码

### 注意事项
- 请勿将大于 **20MB** 的文件（如扫描版教材、视频）直接提交到 Git 仓库  
- 大文件请上传至 **阿里云盘 / 蓝奏云**，并通过 OpenList 或 Markdown 链接引用  
- 图片建议上传至 **阿里云 OSS 图床**，避免仓库膨胀
- 文档类内容请提交到 `docs` 分支，博客类内容提交到 `blog` 分支

## 许可

本站点内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议。  

> © 2025 重庆工商大学 汽车人协会（CTBU-AUTOBOTS）  
