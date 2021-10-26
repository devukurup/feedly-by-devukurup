import React from 'react';
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons"

const Navbar = () => {
    return (
        <div>
            <Header 
                actionBlock={
                    <div className="flex">
                        <Search color="#1e1e20" size={20} />
                        <Notification color="#1e1e20" size={20} />
                        <div className="flex">
                            <Button label="Filter" icon={Filter} style="secondary"/>
                        </div>
                    </div>
                    } 
            title="Feed.ly"/>
        </div>
    );
}

export default Navbar
