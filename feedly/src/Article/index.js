import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Typography } from "@bigbinary/neetoui/v2";
import SubHeadline from "../SubHeadline";
import { Copy } from "@bigbinary/neeto-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Article = () => {
    const [copied, setCopied] = useState(false);
  const { slug } = useParams();
  const { state } = useLocation();
  const { news, category } = state;
  
  const url = `https://www.inshorts.com/en/news/`;
  useEffect(() => {}, []);
  const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000)

  }
  return (
    <div className="pl-40 pr-40 pt-10 ">
      {console.log(state)}

     <div className="text-left">
      <Typography style="h1" className="text-left" >
        {news.title }
     </Typography>
     <div className="flex">
    <CopyToClipboard text={news.readMoreUrl} onCopy={() => handleCopy()}>
        <Copy color="#1e1e20" size={24} />
    </CopyToClipboard>
    
        
    {copied ? <p className="text-gray-400 pl-3"> Copied</p> : null}
    </div>
    </div>
      {/* <a href={url+slug}>Click me</a> */}

      <div className="pt-1">
        <Typography style="body3" className="text-gray-400 text-left">
          {news.author + " at " + news.time + " on " + news.date}
        </Typography>
      </div>
      <div className=" flex items-center justify-center pt-10">
        <img src={"https://picsum.photos/seed/picsum/543/304"} />
      </div>
      <div className ="pt-20 space-y-5">
          <Typography style="body2">{news.content}</Typography>
          <Typography style="body2">Velit occaecat sit sint ea commodo reprehenderit commodo sint. Id cillum cillum id nostrud irure anim mollit ut tempor veniam sint irure incididunt. Cillum irure in dolor ipsum mollit commodo magna veniam exercitation minim occaecat cupidatat. Adipisicing magna cupidatat fugiat labore id magna esse. Consectetur labore fugiat pariatur fugiat irure commodo adipisicing irure in nulla laboris cupidatat non elit. Qui enim enim et ullamco ad sit in est.</Typography>
          <Typography style="body2">Exercitation consequat ea ea sint. Qui pariatur ea dolor mollit. Aliquip velit dolor reprehenderit excepteur veniam est et aliquip non. Qui commodo est sit qui. Id ut deserunt exercitation aliquip dolore exercitation minim. Dolore consectetur magna do nostrud. Elit ea amet ea minim. Reprehenderit et esse elit dolore excepteur aute commodo. Aliquip ea irure sunt ipsum et laborum laboris deserunt culpa Lorem proident ex sunt duis. Dolor nostrud magna qui occaecat et tempor commodo nostrud ullamco officia sit nostrud fugiat enim. Occaecat sit nisi labore non proident officia ut minim. Ipsum duis ut Lorem exercitation labore voluptate adipisicing anim eu nulla ipsum. Deserunt eiusmod cillum do eu labore ea nisi consectetur esse.</Typography>
          <Typography style="body2">{news.content}</Typography>
      </div>
      <div className="pt-12 pb-12">
      <hr />
      </div>
      <div className=" grid grid-rows-2 gap-5">


<div className="grid grid-cols-2 gap-20">
    < SubHeadline news={news} category={category} />
    < SubHeadline news={news} />

</div>

<div className="grid grid-cols-2 gap-20">
< SubHeadline news={news} />
< SubHeadline news={news} />
</div>
<hr className="mt-8 mb-8"/>

</div>
    </div>
  );
};

export default Article;
