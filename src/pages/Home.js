import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import TextTitle from "../components/Title/TextTitle";
import HeaderCard from "../components/Cards/HeaderCard";

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
  });

  console.log(news);

  return (
    <div className="container-xxl">
      <TextTitle title="Indonesia"/>
      <div className="card-section">
        {news?.slice(0, 1).map((data) => (
          <HeaderCard
            item={data}
            alt={`gambar dari ${data.title}`}
          />
        ))}
        {news?.slice(1).map((data) => (
          <NewsCard
            item={data}
            alt={`gambar dari ${data.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;