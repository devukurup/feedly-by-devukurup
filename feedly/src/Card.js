import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import SubHeadline from './SubHeadline';


const Card = ({news}) => {
    const length = 300;
    return (
        <div className="pl-20 pr-20">

            <div >
                <Header title={<Typography style="h2">Science News</Typography>} /> 
                <div className="grid grid-cols-2">

                    <div>
                        <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/526/263'} />
                    </div>

                    <div>

                        <div>
                            <Typography style="h3" className= "text-gray-600 text-justify"> {news.title} </Typography>
                        </div>

                        <div className="pt-2">
                            <Typography  style="body3" className="text-gray-400 text-right" >
                                {news.author + " at " + news.time + " on " + news.date}
                            </Typography>
                        </div>

                        <div className="pt-5">
                            <Typography style="body2">
                                {(news?.content?.length > length ? news.content.substring(0,length) : news.content) + "......"}
                            </Typography>    
                        </div>

                        <div className="pt-4">
                            <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                        </div>
                      
                    </div>

                </div>
                <hr className="mt-8 mb-8"/>

            </div>
       
            <div className=" grid grid-rows-2 gap-5">


                <div className="grid grid-cols-2 gap-20">
                    < SubHeadline news={news} />
                    < SubHeadline news={news} />

                </div>

            <div className="grid grid-cols-2 gap-20">
            < SubHeadline news={news} />
            < SubHeadline news={news} />
            </div>
            <hr className="mt-8 mb-8"/>
            
        </div>
        </div>
    )
}

export default Card
