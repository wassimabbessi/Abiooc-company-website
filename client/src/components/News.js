import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Fetch news items from an external data source or API
    const fetchNewsItems = async () => {
      try {
        // Make the API call to fetch news items
        const response = await fetch('https://api.example.com/news');
        const data = await response.json();

        // Update the news items state
        setNewsItems(data.newsItems);
      } catch (error) {
        console.log('Error fetching news items:', error);
      }
    };

    fetchNewsItems();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-heading">Latest News</h2>
      {newsItems.map((item) => (
        <div className="news-item" key={item.id}>
          <h3 className="news-title">{item.title}</h3>
          <p className="news-description">{item.description}</p>
          <p className="news-date">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
