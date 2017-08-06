var mongoose = require("mongoose");

// var exerciseSchema = mongoose.Schema({
//     name: {type: String, default: "Rest", required: true},
//     sets: {type: String, default: "3", required: true},
//     reps: {type: String, default: "10", required: true},
//     notes: {type: Array, default: []}
// });
var weekSchema = mongoose.Schema({
    loday: [],
    sunday: ["Rest"],
    monday: ["Rest"],
    tuesday: ["Rest"],
    wednesday: ["Rest"],
    thursday: ["Rest"],
    friday:    ["Rest"],
    saturday:  ["Rest"]
});

module.exports = mongoose.model("Week",weekSchema);