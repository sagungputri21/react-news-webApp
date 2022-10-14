import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const NewsCard = ({ imageURL, alt, name, title, date, author, path }) => {
    return (
      <div>
        <div>
          <img className="img-fluid" src={imageURL} alt={alt} />
          <p>{name}</p>
          <h2>{title}</h2>
          <p className="flex">
            {new Date(`${date}`).toDateString().slice(3)}
            <span className="mx-1 rounded-full "></span>
            {author}
          </p>
          <div className="flex mx-3">
            <a href={path} target="_blank">
              <Button
                children={"News Page"}
                extraStyle={""}
              />
            </a>
            <Button 
              onClick={""}
              extraStyle={""}
              children={
                // <i className="fa-book"></i>
                <div>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
              }
            />
          </div>
        </div>
      </div>
    )
  };
  
export default NewsCard;
  