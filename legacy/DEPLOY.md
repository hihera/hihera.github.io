# Hera 个人网站部署指南

本文档将指导你如何将 Hera 个人网站部署到 GitHub Pages。

---

## 📋 目录

1. [本地预览](#1-本地预览)
2. [部署到 GitHub Pages](#2-部署到-github-pages)
3. [部署到用户主页 (username.github.io)](#3-部署到用户主页-usernamegithubio)
4. [如何更新内容](#4-如何更新内容)
5. [常见问题](#5-常见问题)

---

## 1. 本地预览

在将代码推送到 GitHub 之前，建议先在本地预览效果。

### 方式一：使用 Node.js 服务器（推荐）

```bash
# 在项目根目录下运行
node server.js
```

服务器启动后，访问：`http://localhost:3001`

### 方式二：使用 Python 服务器

```bash
# Python 3
python -m http.server 3001

# 或 Python 2
python -m SimpleHTTPServer 3001
```

访问：`http://localhost:3001`

### 方式三：使用 VS Code Live Server 插件

1. 安装 "Live Server" 插件
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 2. 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 **+** 号，选择 **New repository**
3. **Repository name** 填写 `hera`
4. 确保选择 **Public**（私有仓库需要 GitHub Pro 才能使用 Pages）
5. 点击 **Create repository**

### 第二步：推送代码

在本地项目根目录下打开终端，执行以下命令：

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "Initial commit: Hera website"

# 4. 关联远程仓库 (将 YOUR_USERNAME 替换为你的 GitHub 用户名)
git remote add origin https://github.com/YOUR_USERNAME/hera.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings** (设置)
3. 在左侧菜单栏找到 **Pages**
4. 在 **Build and deployment** 下：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main`，文件夹选择 `/ (root)`
5. 点击 **Save**

稍等 1-2 分钟，你的网站将在以下地址上线：

```
https://YOUR_USERNAME.github.io/hera/
```

---

## 3. 部署到用户主页 (username.github.io)

如果你想将网站部署为你的 GitHub 用户主页（如 `hihera.github.io`），有两种方式：

### 方式一：创建专用仓库（推荐新用户）

1. 创建一个名为 `YOUR_USERNAME.github.io` 的新仓库
2. 将本项目代码推送到该仓库的 `main` 分支
3. 网站将自动部署到 `https://YOUR_USERNAME.github.io/`

```bash
# 示例：部署到 hihera.github.io
git remote add origin https://github.com/hihera/hihera.github.io.git
git branch -M main
git push -u origin main
```

### 方式二：使用新分支（已有旧网站时）

如果你已有 `username.github.io` 仓库且有旧网站，可以创建新分支：

```bash
# 1. 克隆现有仓库
git clone https://github.com/hihera/hihera.github.io.git
cd hihera.github.io

# 2. 创建新分支
git checkout -b new-site

# 3. 清空当前内容（保留 .git 目录）
# Windows PowerShell:
Get-ChildItem -Exclude .git | Remove-Item -Recurse -Force

# macOS/Linux:
# ls -A | grep -v .git | xargs rm -rf

# 4. 复制新网站文件到此目录
# (将 hera 项目的所有文件复制过来，不包括 .git 目录)

# 5. 添加并提交
git add .
git commit -m "New website: Hera"

# 6. 推送新分支
git push -u origin new-site
```

然后在 GitHub 仓库的 **Settings > Pages** 中：
- 将部署分支从 `master` 改为 `new-site`

**保留旧网站**：旧网站代码仍保留在 `master` 分支，可随时切换回去。

---

## 4. 如何更新内容

得益于动态配置架构，更新网站内容非常简单。

### 更新状态 (Hera's Status)

```bash
# 编辑状态文件
# 然后提交推送
git add data/status.json
git commit -m "Update: status"
git push
```

### 发布新文章

1. 在 `data/posts/` 目录下创建新的 Markdown 文件
2. 更新 `data/index.json`，在 `posts` 数组中添加新文件名
3. 提交推送：

```bash
git add data/posts/2025-01-05-new-article.md data/index.json
git commit -m "Add: new blog post"
git push
```

### 更新项目/赛事/简历

直接编辑对应的 JSON 文件或 `index.html` 中的 `DEFAULT_CONTENT`：

```bash
# 例如更新项目
git add data/projects.json  # 或 index.html
git commit -m "Update: projects"
git push
```

### 添加图片

1. 将图片放入对应目录（如 `assets/images/projects/`）
2. 在配置中使用相对路径引用

```bash
git add assets/images/projects/new-image.jpg
git add data/projects.json
git commit -m "Add: new project with image"
git push
```

---

## 5. 常见问题

### Q: 网站部署后访问 404？

**A**: 检查以下几点：
1. 确认 GitHub Pages 已启用（Settings > Pages）
2. 确认分支和目录设置正确
3. 等待 1-2 分钟让 GitHub 完成部署
4. 清除浏览器缓存后刷新

### Q: 图片不显示？

**A**: 
1. 检查图片路径是否正确（使用相对路径）
2. 确认图片已提交到 Git 仓库
3. 检查文件名大小写（Git 区分大小写）

### Q: 如何使用自定义域名？

**A**:
1. 在 GitHub 仓库的 Settings > Pages 中添加自定义域名
2. 在你的域名提供商处添加 CNAME 记录指向 `YOUR_USERNAME.github.io`
3. 在项目根目录创建 `CNAME` 文件，内容为你的域名

```bash
echo "www.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### Q: 部署后样式丢失/页面空白？

**A**:
1. 检查浏览器控制台是否有错误
2. 确认所有 CDN 资源可访问（React, Tailwind 等）
3. 如果使用子目录部署（如 `/hera/`），确保资源路径正确

### Q: 如何回滚到旧版本？

**A**:
```bash
# 查看提交历史
git log --oneline

# 回滚到指定版本
git revert HEAD  # 回滚最近一次提交
# 或
git reset --hard COMMIT_HASH  # 回滚到指定提交（慎用）
git push --force
```

---

## 📞 技术支持

如有问题，可以：
1. 查看 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) 了解内容配置详情
2. 在 GitHub Issues 中提问
3. 参考 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
