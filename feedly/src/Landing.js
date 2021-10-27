import React, {useEffect, useState} from 'react';
import newsApi from './apis/news';
import Card from './Card';

const Landing = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
      }, []);

      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch('science');
          // console.log(response.data.data)
          setNews(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="pt-10 pl-20 pr-20">
          <Card news={news}/>
        </div>
    )
}

export default Landing
