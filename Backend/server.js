/* eslint-env node */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Import Models
const User = require('./src/models/User');
const Contact = require('./src/models/Contact');
const Course = require('./src/models/Course');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tradehub')
.then(() => {
  console.log(' Connected to MongoDB');
  seedCourses(); // Add some dummy courses if empty
})
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- ROUTES ---

// 1. User Registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 2. User Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful!', user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// 3. fetch Courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error: error.message });
  }
});

// 4. Contact Us Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully! We will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

// Seed Dummy Courses for Demo
async function seedCourses() {
  const count = await Course.countDocuments();
  if (count === 0) {
    const dummyCourses = [
      { title: 'Trading Basics 101', description: 'Learn the fundamentals of stock and crypto trading.', price: 49, duration: '4 Weeks' },
      { title: 'Advanced Technical Analysis', description: 'Master charts, indicator patterns, and price action.', price: 149, duration: '6 Weeks' },
      { title: 'Options & Futures Mastery', description: 'Understand derivatives and advanced strategies.', price: 199, duration: '8 Weeks' },
    ];
    await Course.insertMany(dummyCourses);
    console.log(' Added default courses to database.');
  }
}
