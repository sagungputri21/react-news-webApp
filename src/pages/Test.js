import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import SavedNewsCard from "../components/Cards/SavedNewsCard";
import Container from 'react-bootstrap/Container';

const Test = () => {
  //atur last month ==> cek lagi besok
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  console.log(date)
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
    // <Container>
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
      {/* <div className="saved-layout"> */}
      {news?.slice(0, 5).map((data) => (
        <div>
          <SavedNewsCard 
            imageURL={data.urlToImage}
            name={data.source.name}
            title={data.title}
            author={data.author}
            path={data.url}
            desc={data.description}
          />
          <hr/>
        </div>
          
        ))}


        {/* {news?.slice(6, 10).map((data) => (
          <SavedNewsCard 
            imageURL={data.urlToImage}
            name={data.source.name}
            title={data.title}
            author={data.author}
            path={data.url}
            desc={data.description}
          />
        ))} */}
    </div>
    // </div>
    // </Container>
  );
};

export default Test;
