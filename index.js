
require("./models/db")
const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {
    allowInsecureProtoTypeAccess,
} = require('@handlebars/allow-prototype-access');


const bodyparser = require('body-parser')

const studentController = require("./controllers/studentController");

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.send(`        
        <h2>welcome to student Database!!</h2>
        <h3>click here to get access to the<b> <a href="/student/list">Database</a>/b></h3>`);
});

app.set('views', path.join(__dirname, '/views/'))

app.engine("hbs", exphbs({
    extname: 'hbs',
    defaultlayout: 'mainlayout',
    layoutdDir: __dirname + '/views/layouts/'

})
);


app.listen(3002, () => {
    console.log("server started at port 3000");

});

app.use("/student", studentController);