import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PermanentNewsBanner from "./NewsBanner";

export const NewsBoard = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles))
      .catch((err) => console.log("Error found while fetching api", err));
  }, [category]);

  return (
    <>
      <PermanentNewsBanner data={article} />
      <div className="text-center mt-3">
        <h2 className="text-center mt-3">
          {" "}
          Latest <span className="badge bg-danger">News</span>{" "}<span className="text-center mt-3"> { category.toUpperCase()}</span>
        </h2>
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              url={news.url}
              src={news.urlToImage}
            />
          );
        })}
      </div>
    </>
  );
};
