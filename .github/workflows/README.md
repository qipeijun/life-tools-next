# GitHub Actions 部署指南

## 📦 自动化部署配置

本项目配置了GitHub Actions自动化构建和部署流程。

## 🚀 触发方式

### 1. 手动触发（推荐）
1. 访问 GitHub 仓库
2. 点击 **Actions** 选项卡
3. 选择左侧的 **Build and Deploy** 工作流
4. 点击右侧的 **Run workflow** 按钮
5. 确认并运行

### 2. 自动触发
推送代码到 `master` 分支时自动触发构建和部署

```bash
git push origin master
```

## 📋 部署流程

1. **检出代码** - 拉取最新代码
2. **设置Node.js** - 配置Node.js 18环境
3. **安装依赖** - 使用yarn安装所有依赖包
4. **构建项目** - 执行 `yarn build` 生成静态文件
5. **部署到GitHub Pages** - 将构建产物部署到gh-pages分支
6. **上传构建产物** - 保存构建文件供下载（保留7天）

## 🌐 部署目标

### GitHub Pages
- 分支：`gh-pages`
- URL：`https://<username>.github.io/<repo-name>`
- 自动部署：推送到master或手动触发时

## ⚙️ 配置说明

### 静态导出配置
项目已配置为静态导出模式（`next.config.mjs`）：
```javascript
output: 'export'
images: { unoptimized: true }
```

### 基础路径（可选）
如果部署在子路径（如 `username.github.io/repo-name`），需要在 `next.config.mjs` 中配置：
```javascript
basePath: '/repo-name'
```

## 📝 GitHub Pages 设置

1. 进入仓库 **Settings** → **Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `gh-pages` 分支，目录选择 `/root`
4. 保存设置

## 🔑 环境变量（可选）

如果需要添加环境变量，在仓库设置中添加 Secrets：
1. 进入 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 在workflow中使用：`${{ secrets.SECRET_NAME }}`

## 📊 构建产物

构建完成后，产物会保存7天，可以在Actions页面下载：
- `.next/` - Next.js构建输出
- `out/` - 静态导出文件

## 🛠️ 本地测试构建

```bash
# 安装依赖
yarn install

# 构建项目
yarn build

# 预览构建结果（需要http服务器）
npx serve@latest out
```

## ❓ 常见问题

### 1. 部署后页面404
- 检查GitHub Pages设置是否正确
- 确认gh-pages分支已创建
- 检查basePath配置

### 2. 样式或图片丢失
- 确认 `images.unoptimized: true` 已配置
- 检查basePath是否与实际路径匹配

### 3. 构建失败
- 查看Actions日志定位错误
- 本地测试 `yarn build` 是否成功
- 检查package.json依赖是否正确

## 📞 支持

遇到问题请查看：
- [Next.js Static Exports文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions文档](https://docs.github.com/actions)
- [GitHub Pages文档](https://docs.github.com/pages)

