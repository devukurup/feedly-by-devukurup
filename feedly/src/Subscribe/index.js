import React, { useContext } from 'react';
import { Modal } from "@bigbinary/neetoui/v2";
import filterContext from '../contexts/filter';
import { Button, Typography, Input} from "@bigbinary/neetoui/v2";
import {  Check } from "@bigbinary/neeto-icons";
import imag from '../assets/orange.png';
import ReactDOM from "react-dom";

function Subscribe() {
    const {  subscribeModal, setSubscribeModal  } = useContext(filterContext)
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setSubscribeModal(false)}>
          <div className="relative top-36 mx-auto p-5 w-80 bg-white space-y-5 " onClick={(e) => e.stopPropagation()}>
          <img className="w-auto mx-auto" src={imag} alt="Subscribe" />
          <Typography style="h2">Subscribe to Feed.ly</Typography>
          <Typography style="body2">We don’t spam, but, we deliver the latest news in short.</Typography>
          <Input placeholder="oliver@example.com" error="Email is required"/>
          <div className="space-x-2">
              <Button label="Sign Up" style="primary" />
              <Button label="Cancel" style="text" />
          </div>

        
    
          </div>
        </div>,
        document.getElementById("search-portal-root")
      );
    }






export default Subscribe
