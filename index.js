require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(
    bodyParser.urlencoded({ extended: true })
);
app.use(bodyParser.json());
app.use(cors());

const DB = process.env.DATABASE + 'RapidBooks?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // connectTimeoutMS: 90000
}).then(() =>
    console.log("Connection succesfull with mongoDB RapidBooks")
).catch((err) =>
    console.log("Failed to connect with MongoDB RapidBooks>", err)
);

app.get('/', (req, res) => {
    res.send("Welcome to RapidBooks API Server. Hit request to get result!");
});
app.use('/api/Payments', require('./routes/payment.route'))

app.listen(process.env.PORT || 4000, () => {
    console.log("RAPIDBOOKS SERVER RUNS PERFECTLY at Port:", process.env.PORT || 4000);
});