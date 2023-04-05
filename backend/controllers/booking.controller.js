const bookingController = require("express").Router();
const { BookingModel } = require("../models/bookingmodel.js");
const { formValidator } = require("../middlewares/formValidator.js");

bookingController.get("/:page/:perpage", async (req, res) => {
  // perpage is confirgurable;
  let page = req.params.page || 1;
  let perpage = req.params.perpage || 4;
  // sorting is available
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
});

bookingController.get("/search/email/:page", async (req, res) => {
  let { email } = req.body.email;
  try {
    let allBookings = await BookingModel.find({ email })
      .skip((req.params.page || 1 - 1) * 4)
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
});

bookingController.get("/search/name/:page", async (req, res) => {
  let { name } = req.body.name;
  try {
    let allBookings = await BookingModel.find({ name })
      .skip((req.params.page || 1 - 1) * 4)
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
});

// sorting

bookingController.get("/sort/:sortingindex/name/:page", async (req, res) => {
  let sortingIndex = req.params.sortingindex || 0;
  try {
    let allBookings = await BookingModel.find({})
      .sort({ name: sortingIndex })
      .skip((req.params.page || 1 - 1) * 4)
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
});

bookingController.get("/sort/:sortingindex/email/:page", async (req, res) => {
  let sortingIndex = req.params.sortingindex || 0;
  try {
    let allBookings = await BookingModel.find({})
      .sort({ email: sortingIndex })
      .skip((req.params.page || 1 - 1) * 4)
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
});

bookingController.get(
  "/sort/:sortingindex/travellers/:page",
  async (req, res) => {
    let sortingIndex = req.params.sortingindex || 0;
    try {
      let allBookings = await BookingModel.find({})
        .sort({ travellers: sortingIndex })
        .skip((req.params.page || 1 - 1) * 4)
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
);

// searching is availabe

bookingController.get("/sort/:sortingindex/budget/:page", async (req, res) => {
  let sortingIndex = req.params.sortingindex || 0;
  try {
    let allBookings = await BookingModel.find({})
      .sort({ budget: sortingIndex })
      .skip((req.params.page || 1 - 1) * 4)
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
});

bookingController.post("/", formValidator, async () => {
  try {
    let addDataToDataBase = new BookingModel(req.body);
    await addDataToDataBase.save();
    res.status(201).json({ message: "data saved successfully" });
  } catch (err) {
    console.log(`error while saving booking data :error is ${error}`);
    res.status(500).json({ message: "server error ,please try again later" });
  }
});

module.exports = {bookingController}