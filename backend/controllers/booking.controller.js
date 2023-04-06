const bookingController = require("express").Router();
const { BookingModel } = require("../models/bookingmodel.js");
const { formValidator } = require("../middlewares/formValidator.js");







bookingController.get("/:page/:perpage", async (req, res) => {
  // perpage is confirgurable;
  let page = req.params.page || 1;
  let perpage = req.params.perpage || 4;

  if(page>=1&&perpage>=1){
    try {
      let allBookings = await BookingModel.find({})
        .skip((page - 1) * perpage)
        .limit(perpage);
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while searching for bookings:error: ${error}`);
      res.status(500).json({ message: "server error" });
    }
  }else{
    res.status(400).json({message:"page number properties can not be negetive"})
  }
  // sorting is available
 
});

bookingController.get("/email/:email/:page", async (req, res) => {
  let  email  = req.params.email;
  let page = +req.params.page||1;
  console.log(email);
  if(page>=1){
    try {
      let allBookings = await BookingModel.aggregate([{$match:{email:email}},{$skip:(page-1)*4},{$limit:4}])
       
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
  
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while searching for bookings:error: ${error}`);
      res.status(404).json({ message: error });
    }
  }else{
    res.status(400).json({message:"page number properties can not be negetive"})

  }
  
});

bookingController.get("/name/:name/:page", async (req, res) => {
  let  name  = req.params.name;
  let page = req.params.page;
  if(page>=1){
    try {
      let allBookings = await BookingModel.find({ name })
        .skip((page - 1) * 4)
        .limit(4);
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while searching for bookings:error: ${error}`);
      res.status(404).json({ message: error });
    
  }

  }else{
    res.status(400).json({message:"page number properties can not be negetive"})

  }
  
 
});

// sorting

bookingController.get("/sort/:sortingindex/name/:page", async (req, res) => {
  let sortingIndex = +req.params.sortingindex || 0;
  let skipPage = +req.params.page||1
  console.log(sortingIndex,skipPage)
  let allowedIndexes = new Set([1,0,-1]);
  if(skipPage>=1&&allowedIndexes.has(sortingIndex)){
    try {
      let allBookings = await BookingModel.find({})
        .sort({ name: sortingIndex })
        .skip((skipPage - 1) * 4)
        .limit(4);
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while sorting for bookings:error: ${error}`);
      res.status(404).json({ message: error });
    }
  }else{
    res.status(400).json({message:"page number properties can not be negetive"})

  }

});

bookingController.get("/sort/:sortingindex/email/:page", async (req, res) => {
  let sortingIndex = +req.params.sortingindex || 0;
  let page = +req.params.page||1;
  let allowedIndexes = new Set([1,0,-1]);
  if(page>=1&&allowedIndexes.has(sortingIndex)){
    try {
      let allBookings = await BookingModel.find({})
        .sort({ email: sortingIndex })
        .skip((page - 1) * 4)
        .limit(4);
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while sorting for bookings:error: ${error}`);
      res.status(404).json({ message: error });
    }
  }else{
    res.status(400).json({message:"page number properties can not be negetive"})

  }
  
});

bookingController.get(
  "/sort/:sortingindex/travellers/:page",
  async (req, res) => {
    let skipPage = +req.params.page||1

    let sortingIndex = +req.params.sortingindex || 0;
    let allowedIndexes = new Set([1,0,-1]);
    if(skipPage>=1&&allowedIndexes.has(sortingIndex)){  try {
      let allBookings = await BookingModel.find({})
        .sort({ travellers: sortingIndex })
        .skip((skipPage- 1) * 4)
        .limit(4);
      if (allBookings.length > 0) {
        res.status(200).json({ allBookings });
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (error) {
      console.log(`error while sorting for bookings:error: ${error}`);
      res.status(404).json({ message: error });
}
}
else{
      res.status(400).json({message:"page number properties can not be negetive"})
    }

  
  }
);

// searching is availabe

bookingController.get("/sort/:sortingindex/budget/:page", async (req, res) => {
  let sortingIndex = req.params.sortingindex || 0;
  let page = +req.params.page || 1
  let allowedIndexes = new Set([1,0,-1]);
  if(page>=1&&allowedIndexes.has(sortingIndex)){  try {
    let allBookings = await BookingModel.find({})
      .sort({ budget: sortingIndex })
      .skip((page - 1) * 4)
      .limit(4);
    if (allBookings.length > 0) {
      res.status(200).json({ allBookings });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    console.log(`error while sorting for bookings:error: ${error}`);
    res.status(404).json({ message: error });
  } }else{
    res.status(400).json({message:"page number properties can not be negetive"})

  }
  
 
});

bookingController.post("/", formValidator, async (req,res) => {
  try {
    let addDataToDataBase = new BookingModel(req.body);
    await addDataToDataBase.save();
    res.status(201).json({ message: "data saved successfully" });
  } catch (err) {
    console.log(`error while saving booking data :error is ${err}`);
    res.status(500).json({ message: "server error ,please try again later" });
  }
});

module.exports = {bookingController}