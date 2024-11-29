const StepSchema = require("../models/Step");

const getAllSteps = async (req, res) => {
try{
const allStep = await StepSchema.find({}).sort({date: "asc"});
res.status(200).json(allStep);
}catch(err){
res.status(500).json(err);
}
}

const createSteps = async (req, res) => {
try{
const createStep = await StepSchema.create(req.body);
res.status(200).json(createStep);
}catch(err){
res.status(500).json(err);
}
}

const getSingleStep = async (req, res) => {
try{
const getSingleStep = await StepSchema.findOne({date: req.params.date});
res.status(200).json(getSingleStep);
}catch(err){
res.status(500).json(err);
}
}

const updateStep = async (req, res) => {
try{
const updateStep = await StepSchema.findOneAndUpdate({date: req.params.date},
req.body,
{new: true}
);
res.status(200).json(updateStep);
}catch(err){
res.status(500).json(err);
}
}

const deleteStep = async (req, res) => {
try{
const deleteStep = await StepSchema.findOneAndDelete({date: req.params.date});
res.status(200).json(deleteStep);
}catch(err){
res.status(500).json(err);
}
}

const getYearSteps = async (req, res) => {
try{
const getYearSteps = await StepSchema.find({date: { $regex: req.params.year + '.*' } });

res.status(200).json(getYearSteps);
}catch(err){
res.status(500).json(err);
}
}

module.exports = {
getAllSteps, createSteps, getSingleStep, updateStep, deleteStep,
getYearSteps
};
