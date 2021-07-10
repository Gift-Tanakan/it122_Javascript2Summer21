console.log('Welcome to IT122')

import http from 'http';

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
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