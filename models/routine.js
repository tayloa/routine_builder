// A routine will consist of:
//     title,
//     description,
//     cover image,
//     weekly routine,
//     creation date

var mongoose = require("mongoose");
var routineSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: {type: String, default: "http://cdn-maf2.heartyhosting.com/sites/muscleandfitness.com/files/styles/homepage_top_1440x500/public/media/mass-hero_0.png?itok=h45q5DuY"},
    week: {type: mongoose.Schema.Types.ObjectId, ref:"Week" },
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Routine", routineSchema);