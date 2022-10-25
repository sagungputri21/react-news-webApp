import React from 'react';
import { Card } from 'react-bootstrap'
import './style/Card.css'
import CustomButton from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import NewsPageButton from '../Button/NewsPageButton';

const HeaderCard = ({ imageURL, alt, name, title, date, author, path, desc }) => {
    return (
      <div style={{ width: "100vw" }} className="header-card">
        <div style={{height: 'fit-content'}}>
          {/*images*/}
          <img className="img-fluid" 
            src={`${imageURL == null ? "/assests/image-not-found.jpg" : `${imageURL}`}`} 
            alt={alt} 
          />
          <div className="news-content"> {/*date and name*/}
            <p className="flex text-date">
              {new Date(`${date}`).toDateString().slice(3)}
              <span className="mx-1 rounded-full">{" | "}</span>
              {name} ( {author} )
            </p>
            <h3 className='news-title'> {/*news's title*/}
              {`${title.length >= 110 ? `${title.substring(0, 110)}...` : `${title}`}`}
            </h3>
            <p className='desc-header'>{desc}</p>
            <div className="grid btn-primary button gap-2.5">
              <NewsPageButton path={path} />
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
        </div>   
        <hr /> 
      </div>
    )
};
  
export default HeaderCard;
  