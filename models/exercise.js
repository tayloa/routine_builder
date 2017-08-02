var mongoose = require("mongoose");
var exerciseSchema = mongoose.Schema({
    name: {type: String, default: "Rest"},
    sets: {type: String, default: 3},
    reps: {type: String, default: 10},
    notes: []
});
module.exports = mongoose.model("Exercise", exerciseSchema);