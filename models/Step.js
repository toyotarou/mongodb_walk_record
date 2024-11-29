const mongoose = require("mongoose");

const StepSchema = new mongoose.Schema({
date: {
type: String,
required: [true, "required"],
trim: true,
maxlength: [10, "date too long"],
},
step: {
type: Number,
required: [true, "required"],
trim: true,
},
distance: {
type: Number,
required: [true, "required"],
trim: true,
}
});

module.exports = mongoose.model("StepSchema", StepSchema);
