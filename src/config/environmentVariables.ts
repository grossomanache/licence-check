require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const whatsappSender = process.env.TWILIO_SENDER;
const whatsappReceiver = process.env.TWILIO_RECEIVER || "";

const vitacuraUrl = process.env.VITACURA_URL ?? "";

export { accountSid, authToken, whatsappReceiver, whatsappSender, vitacuraUrl };
