import React, {useState} from 'react';
import { Tag } from "@bigbinary/neetoui/v2";
import Navbar from './Navbar';
import Landing from './Landing';
import filterContext from './contexts/filter';
import { categories } from './category';

const App = () => {
  const [categoryList, setCategoryList] = useState(['business','national', 'sports','world'])
  const [checkedState, setCheckedState] = useState(categories.map(({id}) => ( categoryList.includes(id) )));
  const [tag, setTag] = useState(false)

  const updateState = (updatedCheckedState) => {
    setCheckedState(updatedCheckedState)

    const updatedList = updatedCheckedState.map((val,index) => {

        return val ? categories[index].id : null
    })
    const removeNull = updatedList.filter(val => val !== null && val !== "all")
    setCategoryList(removeNull)
      
  }

  const handleClose = (name) => {
    console.log("im here now")
    setCategoryList(categoryList.filter(n => n!==name))
  }
  const newsFeedFilter = {checkedState, setCheckedState, categoryList, setCategoryList, updateState};
  return (
    <div>
    <filterContext.Provider value={newsFeedFilter}>
    
      <Navbar />
      <div className="pt-10 pl-40 pr-40 space-x-3">
        {console.log(categoryList)}
      {
      categoryList.map(( name ) => {
              return(<Tag label={name.charAt(0).toUpperCase()+name.slice(1)}  onClose={() => handleClose(name)}/>)
            })}
      </div>
      <Landing />
      

    
    </filterContext.Provider>
    </div>
  )



}

export default App

