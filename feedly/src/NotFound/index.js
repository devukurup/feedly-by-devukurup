import React from 'react';
import imag from '../assets/notfound.png';
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { Highlight} from "@bigbinary/neeto-icons"

const NoNewsFound = () => {
    return (
        <div>
            <div className="mx-auto justify-items-center space-y-3">
            <img className="w-80 mx-auto" src={imag} alt="No New Articles Found" />
            <Typography className="mx-auto text-center" style="h2">No News Articles Found</Typography>
            <Button label={<Typography prefix="hello" iconPosition="left" style="h4">Write to us</Typography>}  style="secondary" />
            </div>
            
        </div>
    )
}

export default NoNewsFound
