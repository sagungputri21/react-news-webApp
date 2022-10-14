import React, { useState, useEffect } from "react";
import client from "../api/baseAPI";
import { Card } from "react-bootstrap";
import NewsCard from "../components/Cards/NewsCard";

const Home = () => {
    const [news, setNews] = useState([]);

    const newsData = async () => {
        try {
            const data = await client.get("top-headlines?sources=techcrunch");
            setNews(data.data.articles);
        }catch (err) {
            console.log('error ===> ', err)
        }
    }

    useEffect(() => {
        newsData()
    }, []);

    console.log(news);
    return (
      <div>
        {/* <h1 className="text-4xl mb-12">Hallo! <br/> This is 10 user's data from JSONPlaceholder</h1> */}
        <div>
            {/* {news?.map((data) => (
                <><h1>{data.title}</h1>
                <p>{data.content}</p>
                <p>{data.description}</p>
                <p>{new Date(`${data.publishedAt}`).toDateString().slice(3)}</p>
                <p>{data.publishedAt}</p></>
            ))} */}
            {news?.map((data) => (
              <NewsCard 
                imageURL={data.urlToImage}
                alt={`gambar dari ${data.title}`}
                name={data.name}
                title={data.title}
                date={data.publishedAt}
                author={data.author}
                path={data.url}
              />
            ))}
        </div>
            {/* <h1>{news} haha</h1> */}
      </div>
    )
}

export default Home;