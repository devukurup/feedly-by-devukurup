import React, { useEffect, useState, useContext } from "react";
import newsApi from "apis/news";
import Card from "components/Headlines/NewsCards";
import filterContext from "contexts/filter";
import { Tag, PageLoader } from "@bigbinary/neetoui/v2";
import NoNewsFound from "components/NotFound";

const Landing = () => {
  const [news, setNews] = useState([]);
  const {
    categoryList,
    setCategoryList,
    setCatParam,
    catParam,
    archived,
    setArchived,
  } = useContext(filterContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
    setLoading(true);
  }, [categoryList]);

  const fetchNews = async () => {
    try {
      const response = await newsApi.fetch(categoryList);
      setLoading(false);
      setNews(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = (name) => {
    setCatParam(!catParam);
    return setCategoryList(categoryList.filter((n) => n !== name));
  };
  return (
    <div className="pt-10 pl-20 pr-20">
      <div className="pl-20 pr-20 space-x-3">
        {isLoading && <PageLoader />}

        {categoryList.map((name, index) => {
          return (
            <Tag
              key={index+1}
              label={name.charAt(0).toUpperCase() + name.slice(1)}
              onClose={() => handleClose(name)}
            />
          );
        })}
        {archived && (
          <Tag label="Archived" onClose={() => setArchived(false)} />
        )}
      </div>
      {!isLoading &&
        categoryList.length > 0 &&
        news.map((n, index) => {
          return <Card key={index+1} category={n.data.category} news={n.data.data} />;
        })}
      {categoryList.length <= 0 && <NoNewsFound />}
    </div>
  );
};

export default Landing;
