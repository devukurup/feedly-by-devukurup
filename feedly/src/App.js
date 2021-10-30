import React, { useState } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import filterContext from "./contexts/filter";
import { categories } from "./category";
import Article from "./Article";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [categoryList, setCategoryList] = useState([
    "business",
    "national",
    "sports",
    "world",
  ]);
  const [catParam, setCatParam] = useState(true);
  const [checkedState, setCheckedState] = useState(
    categories.map(({ id }) => categoryList.includes(id))
  );

  const updateState = (updatedCheckedState) => {
    setCheckedState(updatedCheckedState);

    const updatedList = updatedCheckedState.map((val, index) => {
      return val ? categories[index].id : null;
    });
    const removeNull = updatedList.filter(
      (val) => val !== null && val !== "all"
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
    setCatParam
  };

  return (
    <div>
      <filterContext.Provider value={newsFeedFilter}>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/article/:slug">
            <Article />
          </Route>
        </Switch>
      </filterContext.Provider>
    </div>
  );
};

export default App;
