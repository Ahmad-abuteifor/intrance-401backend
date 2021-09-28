'use strict'

const fruteModele=require('../models/frute.modele')
const getFrute =(req,res)=>{
    fruteModele.find((error,fruteData)=>{
        res.josn(fruteData)
    });
};

const upbdateFrute=((req,res)=>{
const {name,image,price}=req.body
fruteModele.findByIdAndUpdate(frute_Id,value=true,(error,updateFr)=>{
    res.josn(updateFr)

})
fruteModele.Save()

})















module.exports={getFrute,upbdateFrute}

