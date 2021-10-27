import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";


const Card = ({news}) => {
    return (
        <div className="pl-20 pr-20">
            {/* { news.map( n => (
            <div >
              <Header title={<Typography style="h2">Science News</Typography>} /> 
               
                <div className="grid grid-cols-2">

                    <div>
                        <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/526/263'} />
                    </div>

                    <div>

                        <div>
                            <Typography style="h3" className= "text-gray-600 text-justify"> {n.title} </Typography>
                        </div>

                        <div className="pt-2">
                            <Typography  style="body3" className="text-gray-400 text-right" >
                                {n.author + " at " + n.time + " on " + n.date}
                            </Typography>
                        </div>

                        <div className="pt-5">
                            <Typography style="body2">
                                {n.content.substring(0,300) + "......"}    
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
                <hr className="mt-8"/>

            </div>
))} */}
<div >
              <Header title={<Typography style="h2">Science News</Typography>} /> 
               
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
                                {news[0].content.substring(0,300) + "......"}    
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
       
        <div className=" grid grid-rows-2">
            <div className="grid grid-cols-2">
            <div className="grid grid-cols-2">
                <div>
                    <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/84/84'} />
                </div>
                <div>
                    <div>
                    <Typography style="h6" className= "text-left"> {news[1].title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news[1].author + " at " + news[1].time + " on " + news[1].date}
                            </Typography>
                    </div>
                    <div className="pt-1">
                    <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/84/84'} />
                </div>
                <div>
                    <div>
                    <Typography style="h6" className= "text-left"> {news[1].title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news[1].author + " at " + news[1].time + " on " + news[1].date}
                            </Typography>
                    </div>
                    <div className="pt-1">
                    <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                    </div>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2">
            <div className="grid grid-cols-2">
                <div>
                    <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/84/84'} />
                </div>
                <div>
                    <div>
                    <Typography style="h6" className= "text-left"> {news[1].title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news[1].author + " at " + news[1].time + " on " + news[1].date}
                            </Typography>
                    </div>
                    <div className="pt-1">
                    <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/84/84'} />
                </div>
                <div>
                    <div>
                    <Typography style="h6" className= "text-left"> {news[1].title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news[1].author + " at " + news[1].time + " on " + news[1].date}
                            </Typography>
                    </div>
                    <div className="pt-1">
                    <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                    </div>
                </div>
            </div>
            </div>
            <hr className="mt-8 mb-8"/>
            
        </div>
        </div>
    )
}

export default Card
