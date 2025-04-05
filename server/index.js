const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS (if frontend and backend are on different servers)
app.use(express.json()); // Parse JSON request body

// PostgreSQL Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for hosted PostgreSQL (like Render)
  },
});


// Test database connection
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if all fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Insert data into PostgreSQL
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );

    console.log('New contact saved:', result.rows[0]);

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
