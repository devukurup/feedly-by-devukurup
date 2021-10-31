import React, { useState, useEffect, useContext } from 'react';
import imag from '../assets/notfound.png';
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Highlight} from "@bigbinary/neeto-icons";
import SubHeadline from '../SubHeadline';
import newsApi from '../apis/news';
import filterContext from '../contexts/filter';

const NoNewsFound = () => {
    useEffect(() => {
        fetchNews();
       
      },[]);
      const category = "all";
      const [news, setNews] = useState([])
      const {  writeToUsModal, setWriteToUsModal } = useContext(filterContext)
      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch([category]);
          console.log(response)
          setNews(response[0].data.data);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            <div className="mx-auto flex items-center justify-items-center flex-col space-y-7 p-10">
            <img className="w-80 mx-auto" src={imag} alt="No New Articles Found" />
            <Typography className="mx-auto text-center" style="h2">No News Articles Found</Typography>
            <Button className="mx-auto" iconPosition="left" icon={Highlight} label={<Typography style="h4">Write to us</Typography>}  onClick={() => setWriteToUsModal(true)} style="secondary" />
            </div>

            <hr className="p-10" />

            <div className=" grid grid-rows-2 gap-5">


            <div className="grid grid-cols-2 gap-20">
                < SubHeadline news={news[1]} category={category} />
                < SubHeadline news={news[2]} category={category} />

            </div>

            <div className="grid grid-cols-2 gap-20">
            < SubHeadline news={news[3]} category={category}/>
            < SubHeadline news={news[4]} category={category}/>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
            < SubHeadline news={news[news.length-1]} category={category}/>
            < SubHeadline news={news[news.length-2]} category={category}/>
            </div>




            <hr className="mt-8 mb-8"/>
            
        </div>
            
        </div>
    )
}

export default NoNewsFound
