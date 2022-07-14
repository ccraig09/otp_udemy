const twilio = require("twilio");

const accountSid = "AC768b267d328fc859e5fd5f7f718bb154";
const authToken = "6fbb7dcc7b040e216092f739d16b8db3";

module.exports = new twilio.Twilio(accountSid, authToken);
