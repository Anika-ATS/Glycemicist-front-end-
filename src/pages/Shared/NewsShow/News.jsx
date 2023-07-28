// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import NewsDisplay from './NewsDisplay';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const News = () => {
    // const apiKey = '3f01c1ce5314477f9d1f8876df6d5443';
    // const apiUrl = `https://newsapi.org/v2/everything?q=diabetes&apiKey=${apiKey}`;
    // const [newsData, setNewsData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     axios.get(apiUrl)
    //         .then((response) => {
    //             setNewsData(response.data.articles);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching news:', error);
    //         });
    // }, []);
    // // const displayLinks = newsData.slice(0, Math.ceil(newsData.length * 0.75));
    // const diabetesNews = newsData.filter((article) =>
    //     article.title.toLowerCase().includes('diabetes')
    // );
    // const displayNews = diabetesNews.slice(0, 6);
    // //   loading news

    // useEffect(() => {
    //     setLoading(true);
    //     axios.get(apiUrl)
    //         .then((response) => {
    //             setNewsData(response.data.articles);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching news:', error);
    //             setLoading(false);
    //         });
    // }, []);
    // const loadMoreNews = () => {
    //     setLoading(true);
    //     // Assume here that newsData.length is the current number of news articles fetched
    //     const nextPage = Math.ceil(newsData.length / 20) + 1; // Assuming 20 articles per page
    //     const nextPageUrl = `${apiUrl}&page=${nextPage}`;

    //     axios.get(nextPageUrl)
    //         .then((response) => {
    //             setNewsData((prevData) => [...prevData, ...response.data.articles]);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching more news:', error);
    //             setLoading(false);
    //         });
    // };
    return (
        
        <div>
            <div><SectionTitle
                subHeading={'Are you interested to explore the latest news regarding diabetis?'}
                Heading={'Diabetis News Section'}

            ></SectionTitle></div>
            {/* <div className='bg-[#e8f4f4]  grid grid-cols-1 lg:grid-cols-3 gap-2 mb-12'>



                {displayNews.map((article) => <NewsDisplay
                    key={article.title}
                    article={article}></NewsDisplay>

                )}

            </div>
            <div className='mx-96 '>
                {loading && <div className="mx- auto loading loading-spinner text-secondary">Loading...</div>}
                {!loading && (
                    
                    <button onClick={loadMoreNews} className="group bg-[#64d9b9] h-[50px] mb-5  w-96 text-white  rounded-full outline outline-[#1d2939]  hover:bg-[#1d2939] ">
                        Load More News</button> 
                )}
            </div> */}
        </div>
    );
};

export default News;
