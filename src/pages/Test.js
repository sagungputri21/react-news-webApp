import React, { useState, useEffect } from "react";
import client from "../api/baseAPI";
import NewsCard from "../components/Cards/NewsCard";
import SavedNewsCard from "../components/Cards/SavedNewsCard";

const Test = () => {
  //atur last month ==> cek lagi besok
  const date = new Date(new Date().setDate(0)).toISOString();

  const [news, setNews] = useState([]);

  const newsData = async () => {
    try {
      const data = await client.get(
        `everything?q=covid&from=${date}&sortBy=publishedAt`
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
      {news?.slice(0, 5).map((data) => (
          <SavedNewsCard 
            imageURL={data.urlToImage}
            name={data.source.name}
            title={data.title}
            author={data.author}
            path={data.url}
            desc={data.description}
          />
        ))}
    </div>
  );
};

export default Test;
