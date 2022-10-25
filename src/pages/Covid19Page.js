import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import HeaderCard from "../components/Cards/HeaderCard";
import NewsCard from "../components/Cards/NewsCard";
import TextTitle from "../components/Title/TextTitle";

const Covid19Page = () => {
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  const [news, setNews] = useState([]);

  const newsData = async () => {
    try {
      const data = await client.get(
        `everything?q="+covid" OR "pandemic"&from=${date}&sortBy=relevancy`
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
      <TextTitle title="COVID-19" />
      <section className="card-section">
        {news?.slice(0, 1).map((data) => (
          <HeaderCard
            imageURL={data.urlToImage}
            alt={`gambar dari ${data.title}`}
            name={data.source.name}
            title={data.title}
            date={data.publishedAt}
            author={data.author}
            desc={data.description}
            path={data.url}
          />
        ))}
        {news?.slice(1).map((data) => (
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
      </section>
    </div>
  );
};

export default Covid19Page;
