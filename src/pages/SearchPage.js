import NewsCard from "../components/Cards/NewsCard";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom/dist";
import client from "../api/baseApi"
import TextTitle from "../components/Title/TextTitle";

const SearchPage = () => {
    const [news, setNews] = useState();
    const [searchParams] = useSearchParams();

    const searchTerm = searchParams.get(`q`)

    const searchNews = async () => {
        try {
          const data = await client.get(
            `everything?q=${searchParams.get(`q`)}`
          );
          setNews(data.data.articles);
        } catch (err) {
          console.log("error ===> ", err);
        }
    };
    
    useEffect(() => {
        searchNews();
    });

    const capitalizeFirstLowercaseRest = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };
      
    return(
        <div className="container-xxl">
            <TextTitle title={capitalizeFirstLowercaseRest(`${searchTerm}`)} />
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
        
    )
}

export default SearchPage