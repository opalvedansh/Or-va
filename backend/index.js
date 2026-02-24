const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./src/routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);

// Health check
app.get('/', (req, res) => {
    res.send('Oréva Backend API is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
