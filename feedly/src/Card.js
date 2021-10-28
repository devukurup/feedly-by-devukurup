import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";


const Card = ({news}) => {
    return (
        <div className="pl-20 pr-20">
            {console.log(news)}

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
                                {/* {news.content.substring(0,300) + "......"}     */}
                                {news.content+ "......"}
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
                                <Typography style="h6" className= "text-left"> {news.title} </Typography>
                            </div>

                            <div className="pt-1">
                                <Typography  style="body3" className="text-gray-400 text-left" >
                                    {news.author + " at " + news.time + " on " + news.date}
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
                                <Typography style="h6" className= "text-left"> {news.title} </Typography>
                            </div>
                            <div className="pt-1">
                                <Typography  style="body3" className="text-gray-400 text-left" >
                                    {news.author + " at " + news.time + " on " + news.date}
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
                    <Typography style="h6" className= "text-left"> {news.title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news.author + " at " + news.time + " on " + news.date}
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
                    <Typography style="h6" className= "text-left"> {news.title} </Typography>
                    </div>
                    <div className="pt-1">
                            <Typography  style="body3" className="text-gray-400 text-left" >
                                {news.author + " at " + news.time + " on " + news.date}
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
