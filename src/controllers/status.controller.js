

import { Ripple } from '../config/ripple-lib.config';

/** Errors **/
import {
    ErrInternalServerError,
    
} from '../errors/index';


// Get returns a rippled info status
const GetInfo = async (req, res) => {
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

const GetWalletInfo = async (req, res) => {
    const walletID = req.params.ID;
    console.log(walletID)
    try {
        Ripple.connect().then(() => {

            // Request account_info, log response...
            Ripple.getAccountInfo(walletID).then(info => {
                console.log(info);
                res.status(200).json(info);
            });
        });
        
    } catch(e) {
        res.status(500).json({
            error: ErrInternalServerError
        });
    }
}


module.exports = {
    GetInfo,
    GetWalletInfo
};
