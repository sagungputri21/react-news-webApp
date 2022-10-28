import React, { useState, useEffect } from "react";
import NewsCard from "../components/Cards/NewsCard";
import SavedNewsCard from "../components/Cards/SavedNewsCard";
import { articles } from "../data/dummyData"

const Test = () => {

  return (
    // <Container>
    <div className="container-xxl">
      <div className="card-section">
        {articles.map((data) => (
          <NewsCard
            item={data}
          />
        ))}
      </div>
      {/* <div className="saved-layout"> */}
      {/* {articles?.slice(0, 5).map((data) => (
        <div>
          <SavedNewsCard 
            imageURL={data.urlToImage}
            name={data.name}
            title={data.title}
            author={data.author}
            path={data.url}
            desc={data.description}
          />
          <hr/>
        </div>
          
        ))} */}
    </div>
  );
};

export default Test;
