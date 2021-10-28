import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button,Typography } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons"

const Navbar = () => {
    return (
        <div className="flex pl-2 pr-2 items-baseline neeto-ui-shadow-xs">
            <Header 
                actionBlock={
                    <div className=" flex items-end space-x-3 ">
                        <div>
                        <Search color="#1e1e20" size={25} />
                        </div>
                        <div>
                        <Notification color="#1e1e20" size={25} />
                        </div>
                        <div >
                            <Button label="Filter" icon={Filter} style="secondary"  />
                        </div>
                    </div>
                    } 
            title={<Typography style="h4" className="text-grey-700">Feed.ly</Typography>}/>
        </div>
    );
}

export default Navbar
