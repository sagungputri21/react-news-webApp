import React from 'react';
import { Card } from 'react-bootstrap'
import './style/Card.css'
import CustomButton from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const NewsCard = ({ imageURL, alt, name, title, date, author, path }) => {
    return (
      <div style={{ width: '22rem' }} className="news-card">
        <Card style={{height: '465px'}}>
          {/*images*/}
          <img className="img-fluid" 
            src={`${imageURL === null ? "/assests/image-not-found.jpg" : `${imageURL}`}`} 
            alt={alt} 
          />
          <div className="news-content"> {/*date and name*/}
            <p className="flex text-date">
              {new Date(`${date}`).toDateString().slice(3)}
              <span className="mx-1 rounded-full">{" | "}</span>
              {name}
            </p>
            <h4 className='news-title'> {/*news's title*/}
              {`${title.length >= 110 ? `${title.substring(0, 110)}...` : `${title}`}`}
            </h4>
            {/*author*/}
            <p className={`text-author ${author === null ? "visually-hidden" : ""}`} 
              >Author : {author}
            </p>
            <div className="grid btn-primary button gap-2.5">
              <a href={path} target="_blank" rel="noopener noreferrer">
                <CustomButton
                  children={"News Page"}
                  extraStyle={"btn-primary"}
                />
              </a>
              <CustomButton 
                onClick={""}
                extraStyle={"btn-light"}
                children={
                  // <i className="fa-light fa-bookMark"></i>
                  <div className="">
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                }
              />
            </div>
          </div>
        </Card>
              
      </div>
    )
};
  
export default NewsCard;
  