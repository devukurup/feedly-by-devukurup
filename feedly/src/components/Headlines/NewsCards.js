import React, { useEffect, useContext } from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import SubHeadline from './SubHeadline';
import { useHistory } from "react-router-dom";
import filterContext from "../../contexts/filter";


const Card = ({ category, 
    news}) => {
        const {  archived  } = useContext(filterContext)
    const history = useHistory();
    const length = 300;
    const headlines = news[0];

        useEffect(() => {
            sortNews();

        }, [])

        const sortNews = () => {
                news = news.sort(function(a,b){
                var newBDate = b.date.split(" ");
                var Byear = newBDate[2].split(",");
                newBDate = newBDate[1]+" "+newBDate[0]+", "+ Byear[0]
                var newADate = a.date.split(" ");
                var Ayear = newADate[2].split(",")
                newADate = newADate[1]+" "+newADate[0]+", "+Ayear[0]
                
                return new Date(newBDate) - new Date(newADate);
              });
            //   console.log(news)
        }

    return (
        <div className="pl-20 pr-20">

            <div >
                <Header title={<Typography style="h2">{category.charAt(0).toUpperCase() + category.slice(1) +" News"}</Typography>} /> 
                <div className="grid grid-cols-2">

                    <div>
                        <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/526/263'} />
                    </div>

                    <div>

                        <div>
                            <Typography style="h3" className= "text-gray-600 text-justify"> {headlines.title} </Typography>
                        </div>

                        <div className="pt-2">
                            <Typography  style="body3" className="text-gray-400 text-right" >
                                {headlines.author + " at " + headlines.time + " on " + headlines.date}
                            </Typography>
                        </div>

                        <div className="pt-5">
                            <Typography style="body2">
                                {(headlines?.content?.length > length ? headlines.content.substring(0,length) : headlines.content) + "......"}
                            </Typography>    
                        </div>

                        <div className="pt-4">
                            <Button
                                label="Read more"
                                onClick={() => history.push({
                                    pathname: `/article/${headlines?.url.replace("https://www.inshorts.com/en/news/","")}`,
                                    state: {headlines,category}
                                })}
                                style="link"
                            />
                        </div>
                      
                    </div>

                </div>
                <hr className="mt-8 mb-8"/>

            </div>
       
            <div className=" grid grid-rows-2 gap-5">


                <div className="grid grid-cols-2 gap-20">
                    < SubHeadline news={news[1]} category={category} />
                    < SubHeadline news={news[2]} category={category} />

                </div>

            <div className="grid grid-cols-2 gap-20">
            < SubHeadline news={news[3]} category={category}/>
            < SubHeadline news={news[4]} category={category}/>
            </div>
            
            {archived &&
                        <div className="grid grid-cols-2 gap-20">
                        < SubHeadline news={news[news.length-1]} category={category}/>
                        < SubHeadline news={news[news.length-2]} category={category}/>
                        </div>
            }
            {archived &&
                        <div className="grid grid-cols-2 gap-20">
                        < SubHeadline news={news[news.length-3]} category={category}/>
                        < SubHeadline news={news[news.length-4]} category={category}/>
                        </div>
            }
            



            <hr className="mt-8 mb-8"/>
            
        </div>
        </div>
    )
}

export default Card
