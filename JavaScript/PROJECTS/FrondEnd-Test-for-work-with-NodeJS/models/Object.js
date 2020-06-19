const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const objectSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  enCategory: {
    type: String,
    required: true,
  },

  count: {
    type: Number,
    default: 0,
  },
});

let Object = new Model("Object", objectSchema);

Object.createFirstObjects = async () => {
  try {
    await Object.create({
      type: "car",
      category: "Автомобили",
      enCategory: "Cars",
      count: 2,
    });
    await Object.create({
      type: "house-user",
      category: "Имоти",
      enCategory: "Estate",
      count: 1,
    });
    await Object.create({
      type: "user-friends",
      category: "Групи приятели за пътуване",
      enCategory: "Groups of friends for travel",
      count: 2,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = Object;
