import React, { useContext, useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { Input, Typography } from "@bigbinary/neetoui/v2";
import { Search, Down } from "@bigbinary/neeto-icons";
import filterContext from "../../contexts/filter";
import newsApi from "../../apis/news";
import debounce from "lodash/debounce";
import { useHistory } from "react-router-dom";

function SearchModal() {
  const history = useHistory();
  const { enableModal, setEnableModal, categoryList } =
    useContext(filterContext);
  const [searchValue, setSearchValue] = useState("");
  const [categoryNews, setCategoryNews] = useState([]);
  const [suggestionNews, setSuggestionNews] = useState([]);
  const [cardEnabler, setCardEnabler] = useState(false);
  const category = "all";

  const debouncedChangeHandler = useMemo(() =>
    debounce((input) => setSearchValue(input), 600)
  );
  useEffect(() => {
    fetchNews();
    handleSearch();
  }, [searchValue]);

  const fetchNews = async () => {
    try {
      const response = await newsApi.fetch(categoryList);
      const newNewsArray = response.map((dat) => dat.data.data);
      setCategoryNews(newNewsArray.flat(1).slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    debouncedChangeHandler(input);
  };

  const handleSearch = () => {
    if (searchValue.length === 0) {
      setCardEnabler(false);
    } else {
      const suggestions = categoryNews.filter(({ title }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCardEnabler(true);
      setSuggestionNews(suggestions);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={() => setEnableModal(false)}
    >
      <div
        className="relative top-1/3 mx-auto p-5 w-1/3 "
        onClick={(e) => e.stopPropagation()}
      >
        <Input
          className="outline-none focus:neeto-ui-border-none"
          prefix={<Search size={15} color="#1e1e20" />}
          placeholder="Search for an article"
          suffix={<Down size={15} color="#1e1e20" />}
          onChange={handleChange}
        />
        <div className="bg-white ">
          {cardEnabler &&
            suggestionNews.map((news) => {
              return (
                <div className="border-b-2 p-2 ">
                  <Typography
                    className="cursor-pointer"
                    style="body2"
                    onClick={() => {
                      setSuggestionNews([]);
                      setCardEnabler(false);
                      setEnableModal(false);
                      history.push({
                        pathname: `/article/${news?.url.replace(
                          "https://www.inshorts.com/en/news/",
                          ""
                        )}`,
                        state: { news, category },
                      });
                    }}
                  >
                    {news?.title}
                  </Typography>
                </div>
              );
            })}
        </div>
      </div>
    </div>,
    document.getElementById("search-portal-root")
  );
}

export default SearchModal;
