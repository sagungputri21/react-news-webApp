import React, { useState, useEffect } from "react";
import SavedNewsCard from "../components/Cards/SavedNewsCard";
import TextTitle from "../components/Title/TextTitle";
import { useSelector, useDispatch } from "react-redux";

const SavedPage = () => {
  const newsData = useSelector((state) => state.news.newsData);

  return (
    <div className="container-xxl">
        <TextTitle title="Saved"/>
      <div className="pb-3 text-start">
        <div className="d-flex save-top-section w-full">
        <p className="result">Result for the saved news : <span>{`${newsData.length}`}</span></p>
          {/* <div className="remove-button">
            <CustomButton children="Delete All" extraStyle="btn btn-light btn-outline-danger"/>
          </div> */}
        </div>
        <hr />
      </div>
      <section className="result-section">
        {newsData.length === 0 ? (
          <h5>No news saved</h5>
        ) : (
          <div>
          {newsData.map((data) => (
            <SavedNewsCard item={data} key={data.id}/>
          ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SavedPage;
