import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Typography } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";


const Card = ({news}) => {
    return (
        <div>
            { news.map( n => (
            <div className="pl-20 pr-20">
              <Header title={<Typography style="h2">Science News</Typography>} /> 
               
                <div className="grid grid-cols-2">

                    <div>
                        <img className=" object-fill h-auto w-auto" src={'https://picsum.photos/seed/picsum/526/263'} />
                    </div>

                    <div>

                        <div>
                            <Typography style="h3" className= "text-gray-600 text-justify"> {n.title} </Typography>
                        </div>

                        <div>
                            <Typography  style="body3" className="text-gray-400 text-right" >
                                {n.author + " at " + n.time + " on " + n.date}
                            </Typography>
                        </div>

                        <div>
                            <Typography style="body2">
                                {n.content.substring(0,300) + "..."}    
                            </Typography>    
                        </div>

                        <div>
                            <Button
                                label="Read more"
                                onClick={() => alert('read more')}
                                style="link"
                            />
                        </div>
                      
                    </div>

                </div>

            </div>
))}
        </div>
    )
}

export default Card
