import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import Container from 'react-bootstrap/Container';
import TextTitle from "../components/Title/TextTitle";
import HeaderCard from "../components/Cards/HeaderCard";

const ProgrammingPage = () => {
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  const [news, setNews] = useState([]);

  const newsData = async () => {
    try {
      const data = await client.get(
        `everything?q="programming" OR "coding"&from=${date}&searchIn=title`
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
      <TextTitle title="Programming" />
      <section className="card-section">
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
      </section>
    </div>
  );
};

export default ProgrammingPage;
