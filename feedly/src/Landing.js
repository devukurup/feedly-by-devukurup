import React, {useEffect, useState, useContext} from 'react';
import newsApi from './apis/news';
import Card from './Card';
import filterContext from './contexts/filter';
import { Tag } from "@bigbinary/neetoui/v2";
import { categories } from './category';

const Landing = () => {
    const [news, setNews] = useState([]);
    const { categoryList, setCategoryList, setCatParam, catParam, archived, setArchived } = useContext(filterContext)

    useEffect(() => {
        fetchNews();
       
      },[categoryList]);

      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch(categoryList);
          // console.log(response)
          setNews(response);
        } catch (error) {
          console.log(error);
        }
      };
      const handleClose = (name) => {
        setCatParam(!catParam)
        return setCategoryList(categoryList.filter(n => n!==name))

      }
    return (
        <div className="pt-10 pl-20 pr-20">
              <div className="pl-20 pr-20 space-x-3">
                
                  {
                  categoryList.map(( name ) => {
                          return(<Tag label={name.charAt(0).toUpperCase()+name.slice(1)}  onClose={() => handleClose(name)}/>)
                        })}
                    {archived && <Tag label="Archived"  onClose={() => setArchived(false)}/>}    
              </div>
          {
            news.map(n => {
              return(<Card category={n.data.category} news={n.data.data}/>)
            })

          }
        </div>
    )
}

export default Landing
