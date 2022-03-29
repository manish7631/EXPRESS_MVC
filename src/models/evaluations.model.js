const mongoose = require("mongoose");

 
const evaluationSchema = new mongoose.Schema(
  {
    Date_of_evaluations: { type: Date, required: true },
    instructor: { type: String, required: true },
    
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

 
module.exports = mongoose.model("evaluation", evaluationSchema);   
