const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, 'url');
    console.log(req.method, 'method');

    // Check if the requested URL is '/'
    if (req.url === '/') {
        // Read the contents of the HTML file
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                // Handle error if the file cannot be read
                console.error(err);
                res.statusCode = 500; // Internal Server Error
                res.end('Internal Server Error');
            } else {
                // Set the Content-Type header to indicate HTML content
                res.setHeader('Content-Type', 'text/html');
                // Send the HTML content as the response
                res.end(data);
            }
        });
    } else {
        // Handle other URLs with a 404 Not Found response
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server listening on Port 3000');
});