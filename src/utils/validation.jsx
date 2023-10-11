import { object, string, number, date, InferType } from "yup";
const messages = {
  
  email: "Username can't be blank",
  pass: "Username can't be blank",
};

let validation = object({
  email: string().required(messages.email),
  password: string().required(messages.pass)
   
});
export default validation;