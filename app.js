var express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    Routine        = require("./models/routine"),
    Week           = require("./models/week"),
    seedDB         = require("./seeds");
    
seedDB();
mongoose.connect("mongodb://localhost/routine_builder_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
//ss quizlet for ui inspiration
//need data base of exersises
//need table to store rep info

// LANDING
app.get("/", function(req, res) {
   res.redirect("/routines"); 
});

// INDEX
app.get("/routines", function(req, res) {
    Routine.find({}, function(err, routines){
        if (err) {
            console.log(err);
        } else {
            res.render("routines/index", {routines: routines} );     
        }
    });
});

// NEW
app.get("/routines/new", function(req, res) {
   res.render("routines/new"); 
});

// CREATE/ROUTE
app.post("/routines", function(req, res){
    // create routine
    Routine.create(req.body.routine, function(err, newRoutine){
        if (err) {
            console.log(err);
            res.render("routines/new");
        } else {
            // add it to a the homepage and redirect
            res.redirect("routines");
        }
    });
});

// SHOW
app.get("/routines/:id", function(req, res) {
    Routine.findById(req.params.id).populate("week").exec(function(err, foundRoutine){
        if (err) {
            console.log(err);
            res.redirect("/routines");
        } else {
            res.render("routines/show", {routine : foundRoutine});
        }
    });
});

// EDIT
app.get("/routines/:id/edit", function(req, res) {
    Routine.findById(req.params.id, function(err, foundRoutine){
        if (err) {
            console.log(err);
            res.redirect("/routines");
        } else {
            res.render("routines/edit", {routine : foundRoutine});
        }
    });
});

// UPDATE
app.post("/routines/:id", function(req, res) {
    Routine.findByIdAndUpdate(req.params.id, req.body.routine, function(err, updatedRoutine) {
        if (err) {
            console.log(err);
            res.redirect("/routines");
        } else {
            res.redirect("/routines/" + req.params.id);
        }
    });
});

// DESTROY
app.delete("/routines/:id", function(req, res){
    //destroy blog
    Routine.findByIdAndUpdate(req.params.id, req.body.routine, function(err) {
        if (err) {
            console.log(err);
            res.redirect("/routines");
        } else {
            //redirect somewhere
            res.redirect("/routines");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Fitness planner server has started"); 
});