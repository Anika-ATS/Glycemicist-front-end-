import {useEffect, useState} from "react";
import axios from "axios";
import NewsDisplay from "./NewsDisplay";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const News = () => {
  const apiKey = "3f01c1ce5314477f9d1f8876df6d5443";
  const apiUrl = `https://newsapi.org/v2/everything?q=diabetes&apiKey=${apiKey}`;
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        setNewsData(response.data.articles);
        console.log(...newsData);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
      });
  }, [apiUrl]);
  // const displayLinks = newsData.slice(0, Math.ceil(newsData.length * 0.75));
  const diabetesNews = newsData.filter(article =>
    article.title.toLowerCase().includes("diabetes")
  );
  const displayNews = diabetesNews.slice(0, 6);
  //   loading news

  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"Explore Latest Diabetes News!"}
          Heading={"Diabetis News Section"}
        ></SectionTitle>
      </div>
      <div className="bg-[#e8f4f4]  grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
        {displayNews.map(article => (
          <NewsDisplay key={article.title} article={article}></NewsDisplay>
        ))}
      </div>
      <div className="mx-96 "></div>
    </div>
  );
};

export default News;
