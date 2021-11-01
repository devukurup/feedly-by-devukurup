import React from "react";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { useHistory } from "react-router-dom";

const SubHeadline = (props) => {
  const news = props.news;
  const category = props.category;
  const history = useHistory();
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <img
          className=" object-fill h-auto w-auto"
          src={"https://picsum.photos/seed/picsum/200/100"} alt="News"
        />
      </div>
      <div>
        <div>
          <Typography style="h6" className="text-left">
            {" "}
            {news?.title}{" "}
          </Typography>
        </div>

        <div className="pt-1">
          <Typography style="body3" className="text-gray-400 text-left">
            {news?.author + " at " + news?.time + " on " + news?.date}
          </Typography>
        </div>

        <div className="pt-1">
          <Button
            label="Read more"
            onClick={() =>
              history.push({
                pathname: `/article/${news?.url.replace(
                  "https://www.inshorts.com/en/news/",
                  ""
                )}`,
                state: { news, category },
              })
            }
            style="link"
          />
        </div>
      </div>
    </div>
  );
};

export default SubHeadline;
