import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  capital: {
    type: Number,
  },
  isProfitable: {
    type: Boolean,
  },
  profit: {
    type: Number,
  },
  loss: {
    type: Number,
  },
  owner: {
    type: String,
  },
});

const BusinessTable = mongoose.model("business_table", businessSchema);
export default BusinessTable;
