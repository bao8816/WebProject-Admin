require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY;

module.exports = {
    MONGO_URI,
    APP_ID,
    API_KEY,
};