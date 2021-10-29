import React, {useState} from 'react';

import Navbar from './Navbar';
import Landing from './Landing';
import filterContext from './contexts/filter';
import { categories } from './category';

const App = () => {
  const [categoryList, setCategoryList] = useState(['business','national', 'sports','world'])
  const [checkedState, setCheckedState] = useState(categories.map(({id}) => ( categoryList.includes(id) )));
  const updateState = (updatedCheckedState) => {
    setCheckedState(updatedCheckedState)

    const updatedList = updatedCheckedState.map((val,index) => {

        return val ? categories[index].id : null
    })
    const removeNull = updatedList.filter(val => val != null && val != "all")
    setCategoryList(removeNull)
      
  }
  const newsFeedFilter = {checkedState, setCheckedState, categoryList, setCategoryList, updateState};
  return (
    <div>
    <filterContext.Provider value={newsFeedFilter}>
    
      <Navbar />
      <Landing />
      

    
    </filterContext.Provider>
    </div>
  )



}

export default App

