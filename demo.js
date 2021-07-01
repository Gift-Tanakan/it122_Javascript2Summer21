console.log('Welcome to IT122')

//import http from 'http';
//var http = require("http");
//
//// this command starts an HTTP server
//http.createServer(
//    (req,res) => { //request obj and respond obj below will respond with a header and some text
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end('Aloha world');
//    }
//).listen(process.env.PORT || 3000);

//above not working so found one from stackoverflow (https://stackoverflow.com/questions/40567572/how-can-i-use-google-chrome-as-a-node-js-server)

var http = require("http");


//http.createServer(function (request, response) {
//
//   // Send the HTTP header 
//   // HTTP Status: 200 : OK
//   // Content Type: text/plain
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//
//   // Send the response body as "Hello World"
//   response.end('Aloha world');
//}).listen(3000);
//
//// Console will print the message
//console.log('Server running at http://127.0.0.1:3000/');

var fs = require("fs");
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            // console.log('step 1')
            // fs.readFile("home.html", (err, data) => { 
            //readFile invokes the callback with err, data params. It's an asynchronized operation that will return the result to the browser 
            //while nodejs executes several things at the same time without waiting till the file is loaded, making it so efficient
            // console.log('step 2')
            //     if (err) return console.error(err);
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.end(data.toString());
            // });
            // console.log('step 3')
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page || Something about me: I\'m a Programming AAS-T student and a Web Manager at the Seattle Collegian, a student-run newspaper. I cover the column, Give me a break!, as I believe that everyone needs a break once in a while during this stressful time. With a big interest in environmental issues, I practice low-waste living and aim to use my technical skills to help solve those problems. For example, building an application that locates all the zero-waste grocery stores around Seattle area and that matches the user\'s product search with their nearest store. I enjoy improving the Collegian website and practicing web development skills as much as writing, baking, cocoa-powder painting, and listening to podcasts.');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);

// const http = require("http");
// const fs = require("fs");
// http.createServer((req,res) => {
//     var path = req.url.toLowerCase();
//     switch(path) {
//         case '/':
//             fs.readFile("home.html", (err, data) => {
//              if (err) return console.error(err);
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//              res.end(data.toString());
//             });
//             break;
//         case '/about':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About page');
//             break;
//         default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000);