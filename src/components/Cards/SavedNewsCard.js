import React from 'react';
import { Card } from 'react-bootstrap'
import './style/Card.css'
import CustomButton from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import NewsPageButton from '../Button/NewsPageButton';

const SavedNewsCard = ({ 
    imageURL, author, name, title, desc, path 
  }) => {
  return (
    <div class="d-flex saved-card">
      <img className="saved-image" alt="" 
        src={`${imageURL === null ? "/assests/image-not-found.jpg" : `${imageURL}`}`}
      />
      <div className="saved-card-content">
        <p className="author-saved">
          {name} {`${author === null ? "" : `- ${author}`}`}
        </p>
        <h3 className="title">
          {`${title.length >= 110 ? `${title.substring(0, 110)}...` : `${title}`}`}
        </h3>
        {/* <p className='desc'>{desc.substring(0, 175)}...</p> */}
        <div class="d-flex align-items-center button gap-2.5">
          <NewsPageButton path={path} />
          <CustomButton
            onClick={""}
            extraStyle={"btn-light bg-danger"}
            children={
              // <i className="fa-light fa-bookMark"></i>
              <div className="">
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SavedNewsCard;
