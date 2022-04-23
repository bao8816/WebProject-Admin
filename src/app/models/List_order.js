const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List_order = new Schema({
    name: {type: String,required: true},
    bugger: {type: String,required: true},
    price:{type:String, require:true },
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('List_order', List_order);
 