import NewsCard from "../components/Cards/NewsCard"

const SearchPage = ({ news }) => {

    return(
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
    )
}

export default SearchPage