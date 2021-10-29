import React, {useEffect, useState, useContext} from 'react';
import newsApi from './apis/news';
import Card from './Card';
import filterContext from './contexts/filter';

const Landing = () => {
    const [news, setNews] = useState([]);
    const { categoryList } = useContext(filterContext)

    useEffect(() => {
        fetchNews();
      }, []);

      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch(categoryList);
          setNews(response);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="pt-10 pl-20 pr-20">
          {
            news.map(n => {
              return(<Card category={n.data.category} news={n.data.data}/>)
            })

          }
        </div>
    )
}

export default Landing
