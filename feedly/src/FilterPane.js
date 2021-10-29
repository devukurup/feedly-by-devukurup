import React, {useContext, useEffect, useState} from "react";
import { Button, Typography, Pane, Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { categories } from "./category";
import filterContext from "./contexts/filter";

const FilterPane = ({ showPane, setShowPane }) => {
  

  const { checkedState, setCheckedState, categoryList, setCategoryList, updateState } = useContext(filterContext)
  const [prevState, setPrevState] = useState(checkedState);
  const handleOnChange = (position) => {
    
   const updatedCheckedState = checkedState.map((item, index) => {
      if(position === 0){
        return !(checkedState[position])
      }
      else{
        if(item === true && index === 0){
          return !(checkedState[index])
        }
        return(index === position ? !item : item)
      }
    }
    )

    updateState(updatedCheckedState)

    
  };

  const handleOnCancelled = (prevState) => {
    updateState(prevState)
  }


  return (
    <div>
      <Pane isOpen={showPane} onClose={() => {
              setShowPane(false);
              handleOnCancelled(prevState)}}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>

        <Pane.Body className="space-y-9">
          <Typography style="h4" className="text-gray-600">
            Category
          </Typography>
          <div className="space-y-9">
            {categories.map(({ name, id }, index) => {
              return(<Checkbox onChange={()=>handleOnChange(index)} checked={checkedState[index]}  label={name} id={id} />)
            })}

            </div>
          <hr className="w-full" />
          <Checkbox checked id="archived" label="Include archived articles" />
          
        </Pane.Body>

        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => {
              setShowPane(false);

            }}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => {
              setShowPane(false);
              handleOnCancelled(prevState);
              }
            }
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

export default FilterPane;