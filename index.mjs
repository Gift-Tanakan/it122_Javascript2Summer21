console.log('Welcome to IT122')

'use strict'
import * as plantMilk from "./data.mjs";
import express, { query } from 'express';
import { getAll, getItem } from "./data.mjs";
import handlebars from "express-handlebars";
import exphbs from "express-handlebars";
import { PlantBasedMilk } from "./models/plantmilk.mjs";
import cors from 'cors';

const app = express();


app.set('port', process.env.PORT || 3000);
app.use(express.static('public')); // set location for static files
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //used to parse JSON bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

// api show all items
app.get('/api/plantbasedmilks', (req, res) => {
    const plantbasedmilks = plantMilk.getAll();
    if (plantbasedmilks) {
        res.json(plantbasedmilks);
    } else {
        return res.status(500).send('error error errroeeeerrrr');
    }
});

// api show single item
app.get('/api/plantbasedmilks/:name', (req,res) => {
    const plantbasedmilk = plantMilk.getItem(req.params.name); // return a single book
    if (plantbasedmilk) {
      // res.json sets appropriate status code and response header
      res.json(plantbasedmilk);
    } else {
      return res.status(500).send('Database Error occurred');
    }
  });

// api delete
app.get('/api/delete/:id', (req,res, next) => {
    PlantBasedMilk.deleteOne({"_id":req.params.id }, (err, result) => {
        if (err) return next(err);
        // return # of items deleted
        console.log(result)
        res.json({"deleted": result});
    });
});

// api post
app.post('/api/add/', (req,res, next) => {
    // find & update existing item, or add new
    console.log(req.body)
    if (!req.body._id) { // insert new document

        let plantmilk = new PlantBasedMilk({name:req.body.name,producer:req.body.producer,type:req.body.type,price:req.body.price});
        plantmilk.save((err,newPlantmilk) => {
            if (err) return next(err);
            console.log(newPlantmilk)
            res.json({updated: 0, _id: newPlantmilk._id});
        });
    } else { // update existing document
        PlantBasedMilk.updateOne({ _id: req.body._id}, {name:req.body.name,producer:req.body.producer,type:req.body.type,price:req.body.price }, (err, result) => {
            if (err) return next(err);
            res.json({updated: result.nModified, _id: req.body._id});
        });
    }
});

// send plain text response: about
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('A bit about me: Code x craft x write x practice sustainability | I\'m trying to combine them all to make the planet less miserable.');
});

// detail route
app.get('/detail', (req,res,next) => {
    // db query can use request parameters
    PlantBasedMilk.findOne({ name:req.query.name}).lean()
        .then((plantmilk) => {
            res.render('details', { result: plantmilk } );
            // res.json(plantbasedmilks)
        })
        .catch(err => next(err));
});


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

