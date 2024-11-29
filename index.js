var express = require('express');
var app = express();

const stepRoute = require("./routes/steps");

const connectDB = require("./db/connect");

app.use(express.json());

require("dotenv").config();

const PORT = 3000;

app.use("/api/v1/steps", stepRoute);

const start = async () => {
try{
await connectDB(process.env.MONGO_URL);

app.listen(PORT, console.log('server start'));

}catch(err){
console.log(err);
}
};

start();
