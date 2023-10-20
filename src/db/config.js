import mongoose from "mongoose";
const URI =
  "mongodb+srv://nahueldimuro:pumadk@clusterdimuro.ir5auko.mongodb.net/ecommerceCH?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => console.log("conectado a bd"))
  .catch((error) => console.log(error));
