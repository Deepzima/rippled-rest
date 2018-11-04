/** Controllers **/

import StatusController from '../controllers/status.controller';

module.exports = (app) => {

    // Status
    app.get('/api/status/info', StatusController.Get);


};