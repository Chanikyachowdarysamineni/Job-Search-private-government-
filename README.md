# Job Search Portal

A full-stack job search portal for private and government sector jobs, built with Node.js, Express, MongoDB, and static HTML/CSS/JavaScript frontend.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Access the application:**
   - Open browser: http://localhost:5000

## 📦 Deployment

Your project is ready for deployment! See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options:

1. **Render** (Recommended - Free)
   - Push to GitHub
   - Connect repository on render.com
   - Add `MONGODB_URI` environment variable
   - Deploy automatically

2. **Railway**
   ```bash
   railway login
   railway up
   ```

3. **Heroku**
   ```bash
   heroku create
   heroku config:set MONGODB_URI="your-mongodb-uri"
   git push heroku main
   ```

## 🔧 Configuration

- **Database:** MongoDB Atlas (configured)
- **Port:** 5000 (configurable via PORT environment variable)
- **File Uploads:** Stored in `backend/uploads/`

## 📁 Project Structure

```
├── backend/
│   ├── config/        # Database configuration
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── uploads/       # File uploads directory
│   ├── server.js      # Express server
│   └── .env           # Environment variables (not in git)
├── frontend/          # Static HTML/CSS/JS files
├── .gitignore         # Git ignore rules
├── Procfile           # Deployment process file
└── render.yaml        # Render.com configuration

```

## 🔑 Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=your-mongodb-atlas-uri
PORT=5000
```

## 📡 API Endpoints

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `POST /api/apply` - Submit job application (with resume upload)
- `GET /api/applications` - Get all applications

## ✅ Deployment Checklist

- ✅ MongoDB Atlas configured
- ✅ Environment variables set
- ✅ Dependencies installed
- ✅ Server tested locally (Status: 200 OK)
- ✅ Static files served from backend
- ✅ File uploads configured
- ✅ CORS enabled
- ✅ Git ready (.gitignore configured)

## 🐛 Troubleshooting

**Database Connection Issues:**
- Verify MongoDB Atlas IP whitelist settings
- Check database credentials in .env file

**Server Won't Start:**
- Ensure all dependencies are installed: `npm install`
- Check if port 5000 is available
- Review error logs

## 📝 Next Steps for Deployment

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for deployment"
   ```

2. **Create GitHub repository and push:**
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy to platform of choice** (see DEPLOYMENT.md)

## 🔒 Security Notes

- **.env file is gitignored** - Never commit credentials
- **MongoDB Atlas is configured** - Use strong passwords
- **CORS is enabled** - Configure for production domains if needed

## 📚 Documentation

- Full deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- API documentation: See inline comments in routes/

---

**Database Status:** ✅ Connected to MongoDB Atlas  
**Server Status:** ✅ Tested and working (HTTP 200)  
**Deployment Status:** ✅ Ready to deploy
