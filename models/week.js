var mongoose = require("mongoose");
var weekSchema = mongoose.Schema({
    loday: [ {type: mongoose.Schema.Types.ObjectId, ref:"Exercise" } ],
    sunday: ["Rest"],
    monday: ["Rest"],
    tuesday: ["Rest"],
    wednesday: ["Rest"],
    thursday: ["Rest"],
    friday:    ["Rest"],
    saturday:  ["Rest"]
});

module.exports = mongoose.model("Week",weekSchema);