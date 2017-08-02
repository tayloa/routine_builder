var mongoose = require("mongoose");
var Routine = require("./models/routine");
var Week = require("./models/week");

var data = [
    {
        title: "Bicep Killer",
        description: "They say if you don't stand for something, you'll fall for anything. Well, I don't stand for curls and I'm falling in love with these gains.",
        image: "https://bodywhat.com/uploads/media/report/0001/09/thumb_8981_report_extra_eac14c103849acaa85f8ccbc4a1264414a066aca.png"},
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

var exercises = [
  
];

function seedDB() {
    // clear database
    Routine.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed all routines from the database");
            // add routines that have exercises
            data.forEach(function(seed){
                Routine.create(seed, function(err, routine){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a new routine");
                        // create a weekly routine
                        Week.create(
                            {
                                loday: []
                                sunday: ["Bicep Curls","Dips"],
                                monday: ["Rest"],
                                tuesday: ["Cardio"],
                                wednesday: ["Stretch"],
                                thursday: ["Curls", "Tricep Stuff"],
                                friday:    ["Rest"],
                                saturday:  ["Squats","Deadlift"]
                            }, function(err, week){
                            if (err) {
                                console.log(err);
                            } else {
                                routine.week = week;
                                routine.save();
                                console.log("added a new week to the routine");
                            }
                        });
                    }
                });
            });
        }
    });   
}

module.exports = seedDB;