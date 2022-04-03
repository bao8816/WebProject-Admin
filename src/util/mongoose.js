module.exports = {
    multipleMongooseToObject: function(mongooseArray) {
        return mongooseArray.map(mongooseObject => mongooseObject.toObject());
    },

    mongooseToObject: function(mongoose) { 
        return mongoose.toObject();
    }
};
