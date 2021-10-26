import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons"

const Navbar = () => {
    return (
        <div className="flex pl-2 pr-2 neeto-ui-shadow-xs">
            <Header 
                actionBlock={
                    <div className="flex space-x-3 ">
                        <Search color="#1e1e20" size={18} onClick={() => alert('Search')}/>
                        <Notification color="#1e1e20" size={18} onClick={() => alert('Subscribe')}/>
                        <div className="flex">
                            <Button label="Filter" icon={Filter} style="secondary" onClick={() => alert('Filter')} />
                        </div>
                    </div>
                    } 
            title="Feed.ly"/>
        </div>
    );
}

export default Navbar
