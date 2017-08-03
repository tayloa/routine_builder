var mongoose = require("mongoose");
var exerciseSchema = mongoose.Schema({
    name: {type: String, default: "Rest", required: true},
    sets: {type: String, default: "3", required: true},
    reps: {type: String, default: "10", required: true},
    notes: {type: Array, default: []}
});
module.exports = mongoose.model("Exercise", exerciseSchema);