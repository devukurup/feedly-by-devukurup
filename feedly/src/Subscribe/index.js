import React, { useContext, useState } from 'react';
import filterContext from '../contexts/filter';
import { Button, Typography, Input } from "@bigbinary/neetoui/v2";
import imag from '../assets/subscribe.png';
import ReactDOM from "react-dom";
import subscribeApi from '../apis/subscribe';

function Subscribe() {
    const {  subscribeModal, setSubscribeModal  } = useContext(filterContext)
    const [email, setEmail] = useState('');
    const [requiredError, setRequiredError] = useState(true)

const handleChange = (e) => {
  setEmail(e.target.value);
  if(email.length <= 2)
  {
    setRequiredError(true)
  }
  else{
  setRequiredError(false)
  }
}

    const handleSave = () => {
        if(email.length <= 2)
        {
          setRequiredError(true)
        }
        else{
        console.log(email);
        const sub = new Object();
        sub.email = email
        console.log(sub)
        subscribeApi.subscribe(sub);
        setSubscribeModal(false);
        }
        

    }
    
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setSubscribeModal(false)}>
          <div className="relative top-36 mx-auto p-5 w-80 bg-white space-y-5 " onClick={(e) => e.stopPropagation()}>
          <img className="w-auto mx-auto" src={imag} alt="Subscribe" />
          <Typography style="h2">Subscribe to Feed.ly</Typography>
          <Typography style="body2">We don’t spam, but, we deliver the latest news in short.</Typography>
          <Input placeholder="oliver@example.com"  error={requiredError && "Email is required"} onChange={(e) => handleChange(e)}/>
          <div className="space-x-2">
              <Button label="Sign Up" style="primary" onClick={handleSave} />
              <Button label="Cancel" style="text" onClick={()=> setSubscribeModal(false)}/>
          </div>

        
    
          </div>
        </div>,
        document.getElementById("search-portal-root")
      );
    }






export default Subscribe
