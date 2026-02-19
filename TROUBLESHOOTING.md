# Deployment Troubleshooting Guide

## Issue: 404 Not Found Error

### ✅ FIXED: Branch Mismatch
- Updated `master` branch with all deployment code
- Both `main` and `master` branches now have the same code

## Deployment Steps by Platform:

### 🔵 Render.com
1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. **IMPORTANT Settings:**
   - **Branch:** `master` (or select `main`)
   - **Root Directory:** `.` (leave empty)
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && node server.js`
   - **Environment Variables:**
     ```
     MONGODB_URI=mongodb+srv://chanikyachowdary87:Chani8877@cluster0.ah5oe57.mongodb.net/JobPortal
     NODE_ENV=production
     ```
5. Click "Create Web Service"

### 🟢 Vercel
1. Go to https://vercel.com/dashboard
2. Import your GitHub repository
3. **Framework Preset:** Other
4. **Root Directory:** `.`
5. **Build Command:** `cd backend && npm install`
6. **Output Directory:** Leave empty
7. **Install Command:** `npm install --prefix backend`
8. Add Environment Variables in Settings
9. Redeploy

### 🟣 Railway
1. Go to https://railway.app/dashboard
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. **Settings:**
   - **Branch:** master
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && node server.js`
5. Add Environment Variables
6. Deploy

### 🔴 Heroku
```bash
# Make sure you're on master branch
git checkout master

# Push to Heroku
git push heroku master

# Set environment variables
heroku config:set MONGODB_URI="mongodb+srv://chanikyachowdary87:Chani8877@cluster0.ah5oe57.mongodb.net/JobPortal"

# Check logs
heroku logs --tail
```

## Common Issues & Solutions:

### 1. "Module not found" errors
**Solution:** Ensure build command includes `cd backend && npm install`

### 2. "Cannot find package.json"
**Solution:** Use `cd backend` before npm commands

### 3. Port binding errors
**Solution:** Server uses `process.env.PORT || 5000` (already configured)

### 4. MongoDB connection errors
**Solution:** 
- Verify MONGODB_URI environment variable is set
- Check MongoDB Atlas Network Access (allow 0.0.0.0/0)

### 5. 404 errors after deployment
**Possible causes:**
- Wrong branch selected (should be `master` or `main`)
- Wrong root directory
- Missing start command
- Build failed (check build logs)

## Verification Checklist:

- [ ] Repository has latest code on `master` branch ✅
- [ ] Deployment platform connected to correct repository
- [ ] Branch set to `master` (or `main`)
- [ ] Build command: `cd backend && npm install`
- [ ] Start command: `cd backend && node server.js`
- [ ] Environment variable `MONGODB_URI` added
- [ ] MongoDB Atlas allows connections from deployment platform IP

## Check Build Logs:

After redeploying, check your platform's build logs for errors:
- **Render:** Dashboard → Service → Logs
- **Vercel:** Dashboard → Deployments → Click deployment → View Logs
- **Railway:** Project → Deployments → View Logs
- **Heroku:** `heroku logs --tail`

## Still Getting 404?

If you still see 404 after redeploying:
1. Check that the deployment actually completed successfully
2. Verify the correct URL (some platforms assign a random URL)
3. Check if the service is running (not crashed)
4. Review build logs for any errors
5. Ensure `frontend` folder exists and server is serving static files

---

**Your latest commit:** `8568975` - "Add frontend config.js for dynamic API endpoints"
**Branches updated:** Both `main` and `master` have the same code now
