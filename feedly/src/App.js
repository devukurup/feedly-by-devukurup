import React, {useState} from 'react';

import Navbar from './Navbar';
import Landing from './Landing';
import filterContext from './contexts/filter';
import { categories } from './category';

const App = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );
  const newsFeedFilter = {checkedState,setCheckedState };
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

