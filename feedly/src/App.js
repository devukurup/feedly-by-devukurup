import React, {useState} from 'react';

import Navbar from './Navbar';
import Landing from './Landing';
import filterContext from './contexts/filter';
import { categories } from './category';

const App = () => {
  const [categoryList, setCategoryList] = useState(['business','national', 'sports','world'])
  const [checkedState, setCheckedState] = useState(categories.map(({id}) => ( categoryList.includes(id) )));
  
  const newsFeedFilter = {checkedState, setCheckedState, categoryList, setCategoryList};
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

