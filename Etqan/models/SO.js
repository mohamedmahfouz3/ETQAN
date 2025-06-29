import mongoose from "mongoose";

const PI = new mongoose.Schema({ number: Number, description: String });

const SOSchema = new mongoose.Schema({
  description: { type: String, required: true },
  SO_number: { type: Number, required: true },
  teaching_methods: { type: [String], required: true },
  CLOs: { type: [Number], required: true },
  //   ABET_criteria: { type: [Number], required: true },
  PIs: [PI],
});

export default mongoose.models.SO || mongoose.model("SO", SOSchema);
