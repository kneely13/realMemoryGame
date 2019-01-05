const express = require('express');
const bodyParser = require('body-parser')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3001;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
// hello
app.get('/', function(req, res){
    //business logic
    res.json({key:'value'})
})

app.get('/extra', function(req, res){
    //business logic
    res.json({key:'extra'})
})

app.listen(PORT, () => {
    console.log("The sever is starting at PORT " + PORT);
});