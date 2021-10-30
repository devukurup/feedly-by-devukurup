import React, {useContext, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Input, Typography } from "@bigbinary/neetoui/v2";
import { Search, Down } from "@bigbinary/neeto-icons";
import filterContext from "../contexts/filter";
import newsApi from "../apis/news";

function SearchModal() {
    const {  enableModal, setEnableModal, categoryList  } = useContext(filterContext)
    const [ searchValue, setSearchValue ] = useState('');
    const [categoryNews, setCategoryNews] = useState([])
    const [ suggestionNews, setSuggestionNews] = useState([])
    const [ cardEnabler, setCardEnabler ] = useState(false)
    useEffect(() => {
        fetchNews();
      }, []);


      const fetchNews = async () => {
        try {
          const response = await newsApi.fetch(categoryList);
          const newNewsArray = response.map(dat => dat.data.data);
          setCategoryNews(newNewsArray.flat(1));
        } catch (error) {
          console.log(error);
        }
      };

      const handleSearch = (e) => {
        setTimeout(()=> console.log("timer out"),3000)
        console.log("im here")
        setSearchValue(e.target.value)
        
        const suggestions = categoryNews.filter(({title}) => title.includes(searchValue))
        setCardEnabler(true);
        setSuggestionNews(suggestions)
        // console.log(suggestions)
      }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setEnableModal(false)}>
      <div className="relative top-1/3 mx-auto p-5 w-1/3 " onClick={(e) => e.stopPropagation()}>
        <Input className="focus:outline-none" prefix={<Search size={15} color="#1e1e20" />} placeholder="Search for an article" suffix={<Down size={15} color="#1e1e20" />} onChange={(e) => handleSearch(e) } />
        {
            
            cardEnabler && 
            <div>
                {suggestionNews.map((news) => {

                    <div> {console.log("here")}<Typography style="body2">{news?.title}</Typography></div>
                })}
             </div>
        }
      </div>
    </div>,
    document.getElementById("search-portal-root")
  );
}

export default SearchModal;
