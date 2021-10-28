import React, { useState } from "react";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button, Typography, Tooltip } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification, Check } from "@bigbinary/neeto-icons";
import FilterPane from "./FilterPane";

const Navbar = () => {
  const [showPane, setShowPane] = useState(false);
  return (
    <div className="flex pl-2 pr-2 items-baseline neeto-ui-shadow-xs">
      <Header
        actionBlock={
          <div className=" flex items-end space-x-3 ">
            <Tooltip content="Search" placement="bottom-end">
              <button>
                <Search color="#1e1e20" size={25} />
              </button>
            </Tooltip>

            <Tooltip content="Subscribe" placement="bottom-end">
              <button>
                <Notification color="#1e1e20" size={25} />
              </button>
            </Tooltip>

            <div>
              <Button
                label="Filter"
                icon={Filter}
                style="secondary"
                onClick={() => setShowPane(true)}
              />
            </div>
          </div>
        }
        title={
          <Typography style="h3" className="text-grey-700">
            Feed.ly
          </Typography>
        }
      />
      {showPane && <FilterPane showPane={showPane} setShowPane={setShowPane} />}
    </div>
  );
};

export default Navbar;
