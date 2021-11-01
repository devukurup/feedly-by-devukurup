import React, { useState, useContext } from "react";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Typography, Tooltip } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification, Check } from "@bigbinary/neeto-icons";
import FilterPane from "./FilterPane";
import { useHistory, useLocation } from "react-router-dom";
import filterContext from "../contexts/filter";

const Navbar = () => {

  const history = useHistory();
  const {  enableModal, setEnableModal, setSubscribeModal  } = useContext(filterContext)
  const [showPane, setShowPane] = useState(false);
  const location = useLocation();
  return (
    <div className="flex pl-2 pr-2 items-baseline neeto-ui-shadow-xs">
      <Header
        actionBlock={
          <div className=" flex items-end space-x-3 ">
            <Tooltip content="Search" placement="bottom-end">
              <button>
                <Search color="#1e1e20" size={25} onClick={() => setEnableModal(true)} />
              </button>
            </Tooltip>

            <Tooltip content="Subscribe" placement="bottom-end">
              <button>
                <Notification color="#1e1e20" size={25} onClick={() => setSubscribeModal(true)}/>
              </button>
            </Tooltip>

            <div>
              <Button
                label="Filter"
                icon={Filter}
                style="secondary"
                onClick={() => {
                  if(location.pathname !== `/`)
                  {
                    history.push('/')
                  }
                  return  setShowPane(true);
                } }
              />
            </div>
          </div>
        }
        title={
          <Typography style="h3" className="text-grey-700 cursor-pointer" 
          onClick={() => history.push(`/`)}>
            Feed.ly
          </Typography>
        }
      />
      {showPane && <FilterPane showPane={showPane} setShowPane={setShowPane} />}
    </div>
  );
};

export default Navbar;
