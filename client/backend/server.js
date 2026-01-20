import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to fetch news by country
app.get('/api/news/:country', async (req, res) => {
  const { country } = req.params;
  const { category, from, to, language, sources } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        category,
        from,
        to,
        language,
        sources,
        apiKey: process.env.API_KEY,
      },
    });

    // Return the articles from the API
    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Failed to fetch news',
      error: error.response?.data?.message || error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'News API Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📰 News API endpoint: http://localhost:${PORT}/api/news/:country`);
});
