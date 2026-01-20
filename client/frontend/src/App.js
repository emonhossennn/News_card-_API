import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import NewsCard from './components/NewsCard';
import { fetchNewsByCountry } from './services/newsService';
import './App.css';

function App() {
  const [country, setCountry] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (country) {
      setLoading(true);
      setError(null);
      fetchNewsByCountry(country)
        .then((data) => {
          setNews(data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch news. Please try again.');
          setLoading(false);
          console.error('Error fetching news:', err);
        });
    }
  }, [country]);

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background-gradient"></div>

      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-emoji">📰</span>
            Global News Hub
          </h1>
          <p className="app-subtitle">Stay informed with top headlines from around the world</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <CountrySelector setCountry={setCountry} />

        {/* Error State */}
        {error && (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <p>{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loader"></div>
            <p className="loading-text">Loading latest news...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && news.length === 0 && country && (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
            <p>No news articles found for this country.</p>
          </div>
        )}

        {/* Welcome State */}
        {!loading && !error && news.length === 0 && !country && (
          <div className="welcome-state">
            <div className="welcome-icon">🌟</div>
            <h2>Welcome to Global News Hub!</h2>
            <p>Select a country above to discover the latest headlines</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && news.length > 0 && (
          <div className="news-grid">
            {news.map((article, index) => (
              <NewsCard key={article.url || index} article={article} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Powered by NewsAPI.org | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
