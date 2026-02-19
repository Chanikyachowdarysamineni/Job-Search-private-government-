const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const multer=require('multer');
const bodyParser=require('body-parser')
const fs = require('fs');
require('dotenv').config();
const connectDB = require('./config/db');
const Application = require('./models/application');
const path=require('path')

// Connect to MongoDB
connectDB();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ storage: storage });


// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/users', userRoutes);

app.post('/api/apply', upload.single('resume'), async (req, res) => {
    try {
        const {
            'first-name': firstName,
            'last-name': lastName,
            month, day, year,
            'current-address': street1,
            'current-address-2': street2,
            city, state,
            email, phone, linkedin,
            position,
            'hear-about-us': hearAboutUs,
            'start-date': startDate,
            'cover-letter': coverLetter
        } = req.body;

        const newApplication = new Application({
            firstName,
            lastName,
            shiftDate: { month, day, year },
            address: { street1, street2, city, state },
            contact: { email, phone, linkedin },
            jobDetails: { position, hearAboutUs, startDate },
            resumePath: req.file ? req.file.path : null,
            coverLetter
        });

        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ error: 'Failed to submit application' });
    }
});

app.get('/api/applications', async (req, res) => {
    try {
        const applications = await Application.find().sort({ applicationDate: -1 });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});