import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS to allow requests from clinet
app.use(express.json());

// Get the list of users
app.get('/api/users', async (req, res) => {
  try {
    console.log('Fetcing all user data');
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching user list from external API:', error);
    res.status(500).json({ message: 'Error fetching user list' });
  }
});

// Get a single user by ID
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(`Fetcing user data for user-id: ${id}`);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching user data from external API:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
