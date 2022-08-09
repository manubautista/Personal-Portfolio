import * as emailjs from "@emailjs/browser";
import apiKeys from "./../config/apikeys";

const EmailSender = async (props) => {
  emailjs.send("service_fmqnyb1", "Personal-Portfolio", props, apiKeys.USER_ID);
};

export default EmailSender;
