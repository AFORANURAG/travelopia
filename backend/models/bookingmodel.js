const mongoose = require("mongoose");
let bookingSchema = mongoose.Schema({
  name:String,
  email:String,
  destination:{ type: String,
    enum: ['India', 'Africa',"Europe"],
    default: 'India'},
    travellers:{type:Number,min:1,max:1000},
    budget:{type:Number,min:1,max:1000000}
},{timestamps:"true"})
let BookingModel = mongoose.model("booking",bookingSchema);
module.exports = {BookingModel}