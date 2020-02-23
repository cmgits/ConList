// // modules
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyparser = require('body-parser');
// var cors = require("cors");
// var path = require('path');

// var app = express();

// // port no
// const port = 3000;

// // testing server
// app.get('/', (req, res) => {
//     res.send("Welcome .....");
// });

// app.listen(port, () => {
//     console.log("server started at " + port);
// });


//Ver2

//// modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require("cors");
var path = require('path');

var app = express();


// Routers

const route = require("./routers/route");
// app.use('/api', route)


// port no
const port = 3000;

//Adding middle weare

app.use(cors());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));

// testing server
app.get('/', (req, res) => {
    console.log("server started at " + port);
    res.send("Welcome .....");
});

app.listen(port, () => {
    console.log("server started at " + port);
});