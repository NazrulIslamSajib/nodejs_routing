const http = require('http');
const fs = require('fs');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile("home.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Error reading file</h1>");
                res.end();
                return; // Exit the callback to avoid further processing
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }  
    else if (req.url === '/about') {
        fs.readFile("about.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Error reading file</h1>");
                res.end();
                return; // Exit the callback to avoid further processing
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }  
    else if(req.url === '/contuct') {
        fs.readFile("contuct.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Error reading file</h1>");
                res.end();
                return; // Exit the callback to avoid further processing
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    }  
    else if(req.url === '/dashboard') {
        fs.readFile("dashboard.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Error reading file</h1>");
                res.end();
                return; // Exit the callback to avoid further processing
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    } 
    else {
        // Handle other routes
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});

server.listen(PORT, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${PORT}`);
});
