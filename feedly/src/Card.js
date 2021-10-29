import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import SubHeadline from './SubHeadline';
import { useHistory } from "react-router-dom";


const Card = ({ category, 
    news}) => {
    const history = useHistory();
    const length = 300;
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
                            <Typography style="h3" className= "text-gray-600 text-justify"> {news[0].title} </Typography>
                        </div>

                        <div className="pt-2">
                            <Typography  style="body3" className="text-gray-400 text-right" >
                                {news[0].author + " at " + news[0].time + " on " + news[0].date}
                            </Typography>
                        </div>

                        <div className="pt-5">
                            <Typography style="body2">
                                {(news[0]?.content?.length > length ? news[0].content.substring(0,length) : news[0].content) + "......"}
                            </Typography>    
                        </div>

                        <div className="pt-4">
                            <Button
                                label="Read more"
                                onClick={() => history.push(`/article/${news[0].url.replace("https://www.inshorts.com/en/news/","")}`)}
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
                    < SubHeadline news={news[2]} />

                </div>

            <div className="grid grid-cols-2 gap-20">
            < SubHeadline news={news[3]} />
            < SubHeadline news={news[4]} />
            </div>
            <hr className="mt-8 mb-8"/>
            
        </div>
        </div>
    )
}

export default Card
