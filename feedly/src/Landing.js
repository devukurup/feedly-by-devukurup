import React, {useEffect, useState} from 'react';
import newsApi from './apis/news';
// import Card from './Card';

const Landing = () => {
    // const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
      }, []);

      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch(['science','sports']);
          console.log(response)

          // console.log(response.data.data[0].title)
          // setNews(response);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="pt-10 pl-20 pr-20">
          {/* <Card news={news}/> */}
          {/* <h1>{news}</h1> */}
        </div>
    )
}

export default Landing
