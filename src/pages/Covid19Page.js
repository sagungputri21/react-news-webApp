import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import Container from 'react-bootstrap/Container';

const Covid19Page = () => {
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  const [news, setNews] = useState([]);

  const newsData = async () => {
    try {
      const data = await client.get(
        `everything?q="covid" OR "corona"&from=${date}&sortBy=publishedAt&language=en`
      );
      setNews(data.data.articles);
    } catch (err) {
      console.log("error ===> ", err);
    }
  };

  useEffect(() => {
    newsData();
  }, []);

  console.log(news);

  return (
    <div className="container-xxl">
      <div className="card-section">
        {news?.slice(0, 10).map((data) => (
          <NewsCard
            imageURL={data.urlToImage}
            alt={`gambar dari ${data.title}`}
            name={data.source.name}
            title={data.title}
            date={data.publishedAt}
            author={data.author}
            path={data.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Covid19Page;