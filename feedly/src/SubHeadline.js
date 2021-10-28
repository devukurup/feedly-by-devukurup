import React from 'react';
import { Typography, Button } from "@bigbinary/neetoui/v2";

const SubHeadline = ({ news }) => {
    return (
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
    )
}

export default SubHeadline
