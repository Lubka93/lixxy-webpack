const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Enable CORS
app.use(cors());

// Base URL and API Key for TMDb
const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'afbf7cca056ce2daed661a5d429faeeb';

// Function to fetch data from TMDb
async function fetchData(endpoint, params = {}) {
  const url = `${apiBaseUrl}${endpoint}?api_key=${apiKey}&language=en-US&${new URLSearchParams(params)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Example: Fetch popular movies
app.get('/api/popular-movies', async (req, res) => {
  try {
  //  const endpoint = '/movie/popular';
    const data = await fetchData(endpoint);
    res.json(data);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
});

// Example: Fetch movie details by ID
app.get('/api/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const endpoint = `/movie/${id}`;
    const data = await fetchData(endpoint);
    res.json(data);
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
