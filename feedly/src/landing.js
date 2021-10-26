import React, {useEffect, useState} from 'react';
import newsApi from './apis/news';

const Landing = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
      }, []);

      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch('science');
          console.log(response.data.data)
          setNews(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            {news.map(n => (
                <div>
                <h1>{n.author}</h1>
                <p>{n.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Landing
