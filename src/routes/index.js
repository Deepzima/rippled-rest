/** Controllers **/

import StatusController from '../controllers/status.controller';

module.exports = (app) => {

    // Status
    app.get('/api/status/info', StatusController.GetInfo);
    app.get('/api/status/wallet/:ID', StatusController.GetWalletInfo);


};