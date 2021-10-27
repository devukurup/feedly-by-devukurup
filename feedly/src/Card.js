import React from 'react'

const Card = ({news}) => {
    return (
        <div>
            
            {news.map(n => (
                <div>
                <h1>{n.author}</h1>
                <p>{n.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Card
