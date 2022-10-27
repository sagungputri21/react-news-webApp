import React, { useState, useEffect } from "react";
import client from "../../api/baseApi";
import CustomButton from "../Button/Button"
import NewsCard from "../Cards/NewsCard";
import { Container } from "react-bootstrap";

const Search = () => {
    const [text, setText] = useState('');
    const [news, setNews] = useState([]);

    const searchNews = async () => {
        try {
          const data = await client.get(
            `everything?q=${text}`
          );
          setNews(data.data.articles);
        } catch (err) {
          console.log("error ===> ", err);
        }
    };
    
    useEffect(() => {
        searchNews();
    }, []);


    return (
      <div className="Search">
        <div>
            <input 
                type="text" 
                placeholder="search here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <CustomButton onClick={searchNews}>search</CustomButton>
            <div className="card-section">
                {news?.slice(0, 20).map((data) => (
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
        </div>
      </div>
    )
  };
  
  export default Search;