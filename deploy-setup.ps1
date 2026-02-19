# Quick Deployment Setup Script
# Run this in PowerShell

Write-Host "🚀 Job Search Portal - Deployment Setup" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
if (Get-Command git -ErrorAction SilentlyContinue) {
    Write-Host "✓ Git is installed" -ForegroundColor Green
} else {
    Write-Host "✗ Git is not installed. Please install Git first." -ForegroundColor Red
    exit
}

# Initialize git if not already done
if (-not (Test-Path ".git")) {
    Write-Host ""
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - ready for deployment"
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository"
Write-Host "2. Run: git remote add origin <your-repo-url>"
Write-Host "3. Run: git push -u origin main"
Write-Host ""
Write-Host "🌐 Deployment Options:" -ForegroundColor Cyan
Write-Host "• Render: https://render.com (Recommended - Free tier)"
Write-Host "• Railway: https://railway.app"
Write-Host "• Heroku: https://heroku.com"
Write-Host "• Vercel: https://vercel.com"
Write-Host ""
Write-Host "📖 See DEPLOYMENT.md for detailed instructions" -ForegroundColor Yellow
Write-Host ""
Write-Host "✅ Your project is ready for deployment!" -ForegroundColor Green
