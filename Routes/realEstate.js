const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Estate = require("../Module/estate");

router.post("/addEstate", async (req, res) => {
  try {
    const { name, address, price, image, Like } = req.body;

    const newEstate = new Estate({ name, address, price, image, Like });

    const savedEstate = await newEstate.save();

    res.status(200).send({ newEstate: savedEstate, message: "Estate saved" });
  } catch (error) {
    res.status(500).send({ error: error.message, error: error });
  }
});

 const addNewAttribute =async (req, res) => {
    console.log("hello")
  const estates = await Estate.find();

  for (const estate of estates)
  {
    estate.stats = "for Rent";
    await estate.save();
  }
  
}

router.get("/fetctAllestate", async (req, res) => {

  // addNewAttribute();
  const { page , active } = req.query;
  // const {active } = req.body
  console.log("active: " + active);
  console.log("page", page);
  const itemperpage = 3;
  const skip = (page - 1) * itemperpage;
  try {
    // const count = await Estate.countDocuments();
    const count = 5 ;
    
    
    const estate = await Estate.find({address: { $regex: new RegExp(active ,'i') }})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(itemperpage);
     
      res.status(200).json({estate: estate , count: count});

  } catch (error) {
    res.status(500).send({error : error.message , message : "internal server error"} )
  }
});
module.exports = router;
