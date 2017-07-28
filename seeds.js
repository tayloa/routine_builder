var mongoose = require("mongoose");
var Routine = require("./models/routine");

var data = [
    {
        title: "Bicep Killer",
        description: "They say if you don't stand for something, you'll fall for anything. Well, I don't stand for curls and I'm falling in love with these gains.",
        image: "http://fistintheair.com/wp-content/uploads/2011/04/168464_123490294388171_113112785425922_147663_4041141_n.jpg"},
    {
        title: "Tricep Killer",
        description: "Dumbbell flys aren't an exercise because that doesn't contain the word \"Bench\".",
        image: "https://brobible.files.wordpress.com/2016/09/dom-triceps.jpg?quality=90&w=650"},
    {
        title: "There is NO Leg Day", 
        description: "I treat my legs like I treat my girlfriends. I ignore em until they disappear.",
        image: "http://cdn-maf2.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/barbell-back-squat_0.jpg?itok=XJ2Jw0cR"
    }
];

function seedDB() {
    // clear database
    Routine.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed all routines from the database");
        }
    });   
    // add routines that have exercises
}

module.exports = seedDB;