const mongoose = require("mongoose")  ;
const MONGO_URI = "mongodb://localhost/test-db";

mongoose.connect(MONGO_URI)
.then((response) => {
  console.log("conectado a la DB")
})
.catch((err) => {
  console.log("problemas en la conection", err)
})