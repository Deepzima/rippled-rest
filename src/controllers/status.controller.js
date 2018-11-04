

import { Ripple } from '../config/ripple-lib.config';

/** Errors **/
import {
    ErrInternalServerError,
    
} from '../errors/index';


// Get returns a rippled info status
const Get = async (req, res) => {
    console.log("info route")
    try {
        Ripple.connect().then(() => {

            // Request server_info, log response...
            Ripple.getServerInfo().then(info => {
                console.log(info);
                res.status(200).json(info);
            });
        });
        
    } catch(e) {
        res.status(500).json({
            error: ErrInternalServerError
        });
    }
};


module.exports = {
    Get
};
