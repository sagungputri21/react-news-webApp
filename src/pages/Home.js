import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import TextTitle from "../components/Title/TextTitle";

const Home = () => {
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  const [news, setNews] = useState([]);

  const newsData = async () => {
    try {
      const data = await client.get(
        `top-headlines?country=id&from=${date}&sortBy=publishedAt`
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
    <div>
      <TextTitle title="Indonesia"/>
      <div className="card-section">
        {news?.slice(0, 20).map((data) => (
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

export default Home;