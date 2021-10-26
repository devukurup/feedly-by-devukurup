import React, {useEffect} from 'react';
import newsApi from './apis/news';

const Landing = () => {

    useEffect(() => {
        fetchNews();
      }, []);
      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch();
          console.log(response)
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
           <h1>Hello</h1> 
        </div>
    )
}

export default Landing
