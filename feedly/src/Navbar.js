import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button,Typography, Tooltip } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons"

const Navbar = () => {
    return (
        <div className="flex pl-2 pr-2 items-baseline neeto-ui-shadow-xs">
            <Header 
                actionBlock={
                    <div className=" flex items-end space-x-3 ">
                        <Tooltip content="Search" placement="bottom-end">
                            <button><Search color="#1e1e20" size={25} /></button>
                        </Tooltip>

                        <Tooltip content="Subscribe" placement="bottom-end" >
                            <button><Notification color="#1e1e20" size={25} /></button>
                        
                        </Tooltip>

                        <div >
                            <Button label="Filter" icon={Filter} style="secondary"  />
                        </div>
                    </div>
                    } 
            title={<Typography style="h3" className="text-grey-700">Feed.ly</Typography>}/>
        </div>
    );
}

export default Navbar
