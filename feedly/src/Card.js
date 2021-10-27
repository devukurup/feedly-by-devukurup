import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";

const Card = ({news}) => {
    return (
        <div>
            { news.map( n => (
                <div>
              <Header title="Science News" /> 
               
              <div className="grid grid-cols-2 gap-1">
                  <div>
                      <img className=" object-fill h-48 w-9/12" src={n.imageUrl} />
                  </div>
                  <div>
                      <p>{n.title}</p>
                  </div>
              </div>
              </div>
))}
       </div>
    )
}

export default Card
