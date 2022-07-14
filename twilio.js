const twilio = require("twilio");

const accountSid = "AC768b267d328fc859e5fd5f7f718bb154";
const authToken = "cf312297feb062369f0a71690ba35700";

module.exports = new twilio.Twilio(accountSid, authToken);
