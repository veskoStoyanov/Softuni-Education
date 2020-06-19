const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const policySchema = new Schema({
  company: {
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
  object: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

let Policy = new Model("Policy", policySchema);

Policy.createFirstPolicies = async () => {
  try {
    await Policy.create({
      company: "Alianz",
      type: "Застраховка автокаско",
      enType: "Casco insurance",
      object: "Alfa-romeo 146",
      start: "12.05.20",
      end: "12.05.22",
    });

    await Policy.create({
      company: "Alianz",
      type: "Гражданска отговорност",
      enType: "Third party liability insurance",
      object: "Aston Martin DBS",
      start: "12.05.20",
      end: "12.05.22",
    });

    await Policy.create({
      company: "Alianz",
      type: "Застраховка автокаско",
      enType: "Casco insurance",
      object: "Alfa-romeo 146",
      start: "12.05.20",
      end: "12.05.22",
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = Policy;
