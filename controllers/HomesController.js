const Home = require("../models/Home");

// Show list of homes
const index = (req, res, next) => {
  Home.find().then((response) => {
    res
      .json({
        response,
      })
      .catch((err) => {
        res.json({
          message: "An error occurred",
        });
      });
  });
};
// individual home
const show = (req, res, next) => {
  let homeID = req.body.homeID;
  Home.findById(homeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occurred",
      });
    });
};

//post new home
const store = (req, res, next) => {
  let home = new Home({
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    city: req.body.city,
    state: req.body.state,
    image: req.body.image,
    guests: req.body.guests,
    baths: req.body.baths,
    bedrooms: req.body.bedrooms,
    nightly_fee: req.body.nightly_fee,
    cleaning_fee: req.body.cleaning_fee,
    service_fee: req.body.service_fee,
    amenities: req.body.amenities,
  });
  home.save().then((response) => {
    res
      .json({
        message: "Home added successfully",
      })
      .catch((err) => {
        res.json({
          message: "Error has occurred",
        });
      });
  });
};

// update a home
const update = (req, res, next) => {
  let homeID = req.body.homeID;
  let updateData = {
    img: req.body.img,
    title: req.body.title,
    description: req.body.description,
    city: req.body.city,
    state: req.body.state,
    image: req.body.image,
    guests: req.body.guests,
    baths: req.body.baths,
    bedrooms: req.body.bedrooms,
    nightly_fee: req.body.nightly_fee,
    cleaning_fee: req.body.cleaning_fee,
    service_fee: req.body.service_fee,
    amenities: req.body.amenities,
  };

  Home.findByIdAndUpdate(homeID, { $set: updateData }).then(() => {
    res
      .json({
        message: "Home updated successfully",
      })
      .catch((err) => {
        res.json({
          message: "Error has occurred",
        });
      });
  });
};

// delete Home
const destroy = (req, res, next) => {
  let homeID = req.body.homeID;
  Home.findByIdAndRemove(homeID)
    .then(() => {
      res.json({
        message: "Home Deleted successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Error has occurred",
      });
    });
};

module.exports = { index, show, update, destroy, store };
