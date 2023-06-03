import Twilio from "twilio";
import {
  accountSid,
  authToken,
  whatsappReceiver,
  whatsappSender,
} from "../config/environmentVariables";

const sendWhatsappMessage = (message: string) => {
  const client = Twilio(accountSid, authToken);

  client.messages
    .create({
      body: message,
      from: whatsappSender,
      to: whatsappReceiver,
    })
    .then((sentMessage: { sid: string }) => console.log(sentMessage.sid));
};

export default sendWhatsappMessage;
