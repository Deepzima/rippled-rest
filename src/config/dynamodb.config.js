'use strict';

/** Third Party **/
const AWS = require('aws-sdk');

/** Env **/
import { ENV } from './env.config';

export let DynamoDB;

if ( ENV.DYNAMO_DB.IS_OFFLINE === 'true' || ENV.DYNAMO_DB.IS_OFFLINE ) {
    DynamoDB = new AWS.DynamoDB.DocumentClient({
        region: ENV.REGION,
        endpoint: ENV.DYNAMO_DB.ENDPOINT
    })
} else {
    DynamoDB = new AWS.DynamoDB.DocumentClient();
}
