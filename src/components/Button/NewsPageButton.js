import React from "react";
import CustomButton from "./Button";

const NewsPageButton = ({ path }) => {
  return (
    <a href={path} target="_blank" rel="noopener noreferrer">
      <CustomButton 
        children={"News Page"} 
        extraStyle={"btn-primary"} 
      />
    </a>
  );
};

export default NewsPageButton;
