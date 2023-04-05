const express = require('express');

const app = express();
const port = 8080;
const {bookingController} = require("./controllers/booking.controller");
app.use(express.json());
const {connection} = require("./config/db.config");
app.use("/booking",bookingController);
app.get('/', (req, res) => {
  res.status(200).json({message:'Hello, World!'});
});

app.listen(port, async() => {
try{
await connection;
console.log(`connected to db successfully`);
}catch(err){

}
  console.log(`Server running on port ${port}`);
});
