const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to homepage');
    }
    if (req.url === '/about'){
        res.end('Welcome to the about page');
    } 
    res.end(
        `
        <h1>Oops!!<h1>
        <p>Page not found</p>
        <a href="/">Back Home</a>
        `
    )
});

server.listen(5000);