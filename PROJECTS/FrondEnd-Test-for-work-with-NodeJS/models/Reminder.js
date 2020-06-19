const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const reminderSchema = new Schema({
  reminderData: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  enType: {
    type: String,
    required: true,
  },
});

module.exports = new Model("Reminder", reminderSchema);
