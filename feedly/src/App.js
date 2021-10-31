import React, { useState } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import filterContext from "./contexts/filter";
import { categories } from "./category";
import Article from "./Article";
import { Switch, Route } from "react-router-dom";
import SearchModal from "./Search";
import Subscribe from "./Subscribe";
import WriteToUs from "./NotFound/WriteToUs";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [categoryList, setCategoryList] = useState([
    "business",
    "national",
    "sports",
    "world",
  ]);
  const [catParam, setCatParam] = useState(true);
  const [enableModal, setEnableModal] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false)
  const [checkedState, setCheckedState] = useState(
    categories.map(({ id }) => categoryList.includes(id))
  );
  const [writeToUsModal, setWriteToUsModal] = useState(false)
  const [archived, setArchived] = useState(false)

  const updateState = (updatedCheckedState) => {
    setCheckedState(updatedCheckedState);

    const updatedList = updatedCheckedState.map((val, index) => {
      return val ? categories[index].id : null;
    });
    const removeNull = updatedList.filter(
      (val) => val !== null 
    );
    setCategoryList(removeNull);
  };

  const newsFeedFilter = {
    checkedState,
    setCheckedState,
    categoryList,
    setCategoryList,
    updateState,
    catParam,
    setCatParam,
    archived,
    setArchived,
    enableModal,
    setEnableModal,
    subscribeModal,
    setSubscribeModal,
    writeToUsModal,
    setWriteToUsModal
  };

  return (
    <div>
      <filterContext.Provider value={newsFeedFilter}>
        <Navbar />
        {enableModal && <SearchModal />}
        {subscribeModal && <Subscribe/>}
        {writeToUsModal && <WriteToUs />}
        
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/article/:slug">
            <Article />
          </Route>
          <Route >
            <ErrorBoundary />
          </Route>
        </Switch>
      </filterContext.Provider>
      
    </div>
  );
};

export default App;
