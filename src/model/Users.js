const mongoose = require("mongoose");
const users_Schema = mongoose.Schema({
    id: Number,
    userName: String,
    shoppingСart: Array,
    money: Number
},
    { versionKey: false });


module.exports = mongoose.model("users", users_Schema, "users");