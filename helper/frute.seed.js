'use strict'

const fruteModele=require('../models/frute.modele')

const fruteSeed={

    Frute1= new fruteModele ({
        name:'banana',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg',
        price:'50'
    }),
 
  

    Frute2= new fruteModele ({
        name:'apple',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg',
        price:'10'
    }),

}
fruteSeed.save()

module.exports=fruteSeed