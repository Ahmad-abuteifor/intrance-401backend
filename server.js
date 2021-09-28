const express = require('express') 
const app = express()
require('dotenv').config();
const axios = require('axios');
const mongoose = require("mongoose");
// const db = require("./models");

const fruteSeed=require('./helper/frute.seed')

const {getFrute,upbdateFrute}=require('./controller/frute.controller')

// fruteSeed()
const PORT =process.env.PORT

mongoose.connect("mongodb://localhost:27017/frute");

app.get('./frute',getFrute)
app.put('./frute/:frute_Id',upbdateFrute)

app.listen(PORT)