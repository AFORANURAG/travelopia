const mongoose = require("mongoose");
let bookingSchema = mongoose.Schema({
  name:String,
  email:String,
  destination:{ type: String,
    enum: ['India', 'Africa',"Europe"],
    default: 'India'}  
},{timeStamps:"true"})
let BookingModel = mongoose.model("booking",bookingSchema);
module.exports = {BookingModel}