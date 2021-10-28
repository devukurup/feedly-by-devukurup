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
          const response = await newsApi.fetch(['science','sports']);
          // console.log(response);
          setNews(response);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="pt-10 pl-20 pr-20">
          {
            news.map(n => {
              console.log(n.data.category,n.data.data[0]);
              return(<Card category={n.data.category} news={n.data.data[0]}/>)
            })

          }
        </div>
    )
}

export default Landing
