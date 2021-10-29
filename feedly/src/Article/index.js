import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

const Article = () => {
    const { slug } = useParams();
    const url = `https://www.inshorts.com/en/news/`;
    useEffect(() => {

    }, [])
    return (
        <div>
            <h2>Hi this is article page</h2>
            <a href={url+slug}>Click me</a>
            
        </div>
    )
}

export default Article
