export const ENV = {
    REGION: process.env.REGION,
    RIPPLE_SERVER : process.env.RIPPLE_SERVER_ENDPOINT,
    DYNAMO_DB : {
        IS_OFFLINE : process.env.DYNAMO_DB_IS_OFFLINE,
        ENDPOINT : process.env.DYNAMO_DB_ENDPOINT,
    }
};