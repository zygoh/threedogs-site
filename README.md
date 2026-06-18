# threedogs-site

> **简介**：threedogs（[@Three_Dog_z](https://x.com/Three_Dog_z)）中英双语个人站，墨格静观编辑级静态页面；支持 Docker + Nginx 一键部署。

纯静态 HTML/CSS/JS，无构建步骤。语言切换见右上角「中 / EN」（写入 `localStorage`）。

## Docker 部署

```bash
# 构建并运行（映射到本机 8080）
docker compose up -d --build

# 或手动
docker build -t threedogs-site .
docker run -d --name threedogs-site -p 8080:80 --restart unless-stopped threedogs-site
```

浏览器打开 `http://localhost:8080`。健康检查：`GET /` 返回 200。

## 本地预览（无 Docker）

```bash
cd threedogs-site
npx serve .
```

## 结构

```
threedogs-site/
  Dockerfile / docker-compose.yml / nginx.conf
  index.html
  css/style.css
  js/i18n.js          # 中英翻译
  js/main.js          # 滚动动画
  design/             # 视觉哲学 + 海报
  favicon.svg
```

## GitHub About 简介

仓库 Settings → General → Description 可填：

`threedogs 中英双语个人站（@Three_Dog_z），墨格静观静态站点，Docker + Nginx 一键部署。`

或使用 `scripts/set-github-descriptions.ps1` 批量设置四个仓库简介（需 `GITHUB_TOKEN`）。
