console.log('Welcome to IT122')

'use strict'
import * as plantMilk from "./data.mjs";
import express, { query } from 'express';
import { getAll, getItem } from "./data.mjs";
import handlebars from "express-handlebars";
import exphbs from "express-handlebars";

const app = express();


app.set('port', process.env.PORT || 3000);
app.use(express.static('public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //used to parse JSON bodies

app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

//send file
app.get('/', (req, res) => {
    res.render('home', {plantBasedMilk: plantMilk.getAll()});
});
   
// send plain text response
app.get('/about', (req,res) => {
res.type('text/plain');
res.send('A bit about me: Code x craft x write x practice sustainability | I\'m trying to combine them all to make the planet less miserable.');
});

// render detail route
app.get('/detail', (req,res) => {
let result = plantMilk.getItem(req.query.name);
res.render('details', {name: req.query.name, result: result });
})

// define 404 handler
app.use((req,res) => {
res.type('text/plain');
res.status(404);
res.send('404 - Not found');
});

//start server
app.listen(app.get('port'), () => {
console.log('Express started');
});
