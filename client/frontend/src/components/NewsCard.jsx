import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  // Format the date to be more readable
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get category color based on category name
  const getCategoryColor = (category) => {
    const colors = {
      business: '#3b82f6',
      entertainment: '#ec4899',
      general: '#8b5cf6',
      health: '#10b981',
      science: '#06b6d4',
      sports: '#f59e0b',
      technology: '#6366f1'
    };
    return colors[category?.toLowerCase()] || '#6b7280';
  };

  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="news-card-link"
    >
      <article className="news-card">
        <div className="news-card-image-container">
          {article.urlToImage || article.image ? (
            <img 
              src={article.urlToImage || article.image} 
              alt={article.title}
              className="news-card-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x250/1f2937/ffffff?text=No+Image';
              }}
            />
          ) : (
            <div className="news-card-placeholder">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="placeholder-icon"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" 
                />
              </svg>
            </div>
          )}
          {article.category && (
            <span 
              className="news-card-category-badge"
              style={{ backgroundColor: getCategoryColor(article.category) }}
            >
              {article.category}
            </span>
          )}
        </div>
        
        <div className="news-card-content">
          <h2 className="news-card-title">{article.title}</h2>
          
          {article.description && (
            <p className="news-card-description">{article.description}</p>
          )}
          
          <div className="news-card-footer">
            <div className="news-card-source">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="source-icon"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" 
                />
              </svg>
              <span>{article.source?.name || article.source || 'Unknown Source'}</span>
            </div>
            
            {article.publishedAt && (
              <div className="news-card-date">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="date-icon"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" 
                  />
                </svg>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </a>
  );
};

export default NewsCard;
