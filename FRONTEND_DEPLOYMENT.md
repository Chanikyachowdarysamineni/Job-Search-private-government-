# Frontend Deployment Guide

## 🚀 Deploy Frontend Separately

Your frontend is ready to deploy to static hosting platforms!

---

## Option 1: Vercel (Recommended for Static Sites)

### Quick Deploy:
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel

# Follow prompts and deploy!
```

### Or Deploy via Vercel Dashboard:
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. **Settings:**
   - **Framework Preset:** Other
   - **Root Directory:** `frontend`
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
4. Click "Deploy"

### After Deployment:
1. Get your Vercel frontend URL (e.g., `https://your-app.vercel.app`)
2. Update `frontend/config.js`:
   ```javascript
   BACKEND_URL: 'https://your-backend-url.onrender.com',
   ```
3. Commit and push changes
4. Vercel will auto-redeploy

---

## Option 2: Netlify

### Quick Deploy:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to frontend folder
cd frontend

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Or Deploy via Netlify Dashboard:
1. Go to https://app.netlify.com/start
2. Connect to Git (select your repository)
3. **Settings:**
   - **Base directory:** `frontend`
   - **Build command:** (leave empty)
   - **Publish directory:** `.`
4. Click "Deploy site"

### After Deployment:
1. Get your Netlify URL
2. Update `frontend/config.js` with your backend URL
3. Git push to auto-redeploy

---

## Option 3: GitHub Pages (Free)

### Setup:
```bash
# Navigate to project root
cd "d:\All projects\Job-Search-private-government--master"

# Create gh-pages branch
git checkout -b gh-pages

# Copy only frontend files to root (optional)
# Or configure GitHub Pages to use /frontend folder

# Push to GitHub
git push origin gh-pages
```

### Enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: `gh-pages` branch
3. Folder: `/` (root) or `/frontend`
4. Save

Your site will be at: `https://chanikyachowdarysamineni.github.io/Job-Search-private-government-/`

---

## Option 4: Render (Static Site)

1. Go to https://dashboard.render.com
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. **Settings:**
   - **Branch:** master
   - **Root Directory:** `frontend`
   - **Build Command:** (leave empty)
   - **Publish Directory:** `.`
5. Click "Create Static Site"

---

## 🔧 Configuration Required

### IMPORTANT: Update Backend URL

After deploying frontend, update `frontend/config.js`:

```javascript
const API_CONFIG = {
    BACKEND_URL: 'https://your-backend-api.onrender.com', // Your actual backend URL
    // ...
};
```

Then commit and push:
```bash
git add frontend/config.js
git commit -m "Update backend API URL for frontend deployment"
git push
```

---

## 📋 Deployment Checklist

For separate frontend deployment:

- [ ] Deploy backend first (get backend URL)
- [ ] Update `frontend/config.js` with backend URL
- [ ] Commit and push changes
- [ ] Deploy frontend to chosen platform
- [ ] Enable CORS on backend (already configured)
- [ ] Test all API endpoints work from frontend
- [ ] Update MongoDB Atlas to allow backend IP

---

## 🔗 Quick Commands

### Vercel:
```bash
cd frontend
vercel --prod
```

### Netlify:
```bash
cd frontend
netlify deploy --prod
```

### Both Platforms Support:
- ✅ Automatic HTTPS
- ✅ CDN distribution
- ✅ Auto-deploy from Git
- ✅ Custom domains
- ✅ Free tier available

---

## 🐛 Troubleshooting

### CORS Errors:
✅ Backend already has CORS enabled in server.js

### API Connection Failed:
1. Verify backend URL in config.js
2. Check backend is deployed and running
3. Test backend API directly in browser

### 404 on Refresh:
- Vercel: `vercel.json` already configured
- Netlify: `netlify.toml` already configured

---

## 📝 Current Setup

Your frontend has:
- ✅ `config.js` - API configuration
- ✅ `vercel.json` - Vercel deployment config
- ✅ `netlify.toml` - Netlify deployment config
- ✅ `package.json` - Project metadata

**Ready to deploy!** 🚀
