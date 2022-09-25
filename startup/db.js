const mongoose = require("mongoose");
const config = require("config");


module.exports = function(){
    const db = config.get("db");
    mongoose.connect(db)
    .then(() => console.log(`connected to ${db}`));
    // .catch((err) => console.log(new Error(err)));
};