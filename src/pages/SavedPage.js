import React, { useState, useEffect } from "react";
import client from "../api/baseApi";
import NewsCard from "../components/Cards/NewsCard";
import SavedNewsCard from "../components/Cards/SavedNewsCard";
import Container from "react-bootstrap/Container";
import CustomButton from "../components/Button/Button";
import TextTitle from "../components/Title/TextTitle";

const SavedPage = () => {
  //atur last month ==> cek lagi besok
  const current = new Date();
  const date = new Date(current.setMonth(current.getMonth() - 1)).toISOString();
  console.log(date);
  const [news, setNews] = useState([]);

  const savedNews = async () => {
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
    savedNews();
  }, []);

  console.log(news);

  return (
    <div className="container-xxl">
        <TextTitle title="Saved"/>
      <div className="pb-3 text-start">
        <div className="d-flex save-top-section w-full">
        <p className="result">Result for the saved news : <span>{`${news.length}`}</span></p>
          <div className="remove-button">
            <CustomButton children="Delete All" extraStyle="btn btn-light btn-outline-danger"/>
          </div>
        </div>
        <hr />
      </div>
      <section className="result-section">
      {/* {news?.slice(0, 5).map((data) => (
        <div>
          <SavedNewsCard
            imageURL={data.urlToImage}
            name={data.source.name}
            title={data.title}
            author={data.author}
            path={data.url}
            desc={data.description}
          />
        </div>
      ))} */}
      </section>
    </div>
  );
};

export default SavedPage;
