const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const homeSchema = new Schema(
  {
    img: { type: String },
    title: { type: String },
    description: { type: String },
    city: { type: String },
    state: { type: String },
    image: { type: String },
    guests: { type: Number },
    baths: { type: Number },
    bedrooms: { type: Number },
    nightly_fee: { type: Number },
    cleaning_fee: { type: Number },
    service_fee: { type: Number },
    amenities: { type: Array },
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;
