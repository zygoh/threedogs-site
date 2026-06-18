# 批量设置 zygoh 四个公开仓库的 GitHub About 简介
# 需要环境变量 GITHUB_TOKEN（Personal Access Token，scope: repo）
# 用法: $env:GITHUB_TOKEN = "ghp_..." ; .\scripts\set-github-descriptions.ps1

$token = $env:GITHUB_TOKEN
if (-not $token) {
  Write-Error "请设置环境变量 GITHUB_TOKEN"
  exit 1
}

$repos = @{
  "threedogs-site" = "threedogs 中英双语个人站（@Three_Dog_z），墨格静观静态站点，Docker + Nginx 一键部署。"
  "TA-Lib"         = "币安 U 本位合约数据与技术指标 FastAPI：crypto/maternal/sexology MCP、图片清洗、TG/X/Square 分发。"
  "watermark-strip"= "本地 GPU SynthID 去水印 HTTP 服务，封装 remove-ai-watermarks，支持可见/隐形水印与元数据剥离。"
  "QuantAI_ETH"    = "QuantAI-ETH：以太坊量化智能交易系统，FastAPI + Stacking 集成模型 + 严格模式回测/信号。"
}

$headers = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
}

foreach ($name in $repos.Keys) {
  $body = @{ description = $repos[$name] } | ConvertTo-Json -Compress
  $uri = "https://api.github.com/repos/zygoh/$name"
  try {
    Invoke-RestMethod -Method Patch -Uri $uri -Headers $headers -Body $body -ContentType "application/json"
    Write-Host "OK  zygoh/$name"
  } catch {
    Write-Warning "FAIL zygoh/$name : $_"
  }
}
