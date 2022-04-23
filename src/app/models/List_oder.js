const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List_oder = new Schema({
    name: {type: String,required: true},
    bugger: {type: String,required: true},
    price:{type:String ,require:true },
});

module.exports = mongoose.model('List_oder', List_oder);
 