'use strict'

const  Mongoose = require("mongoose")
const Schema=Mongoose.Schema



const fruteSchema =  new Schema({
    name: { type: String },
    image: { type: String },
    price: { type: String },

})

const fruteModele=Mongoose.model('fruteHolde',fruteSchema)


module.exports=fruteModele