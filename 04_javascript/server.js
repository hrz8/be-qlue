const http = require('http');
const { sanitizeResponse } = require('./utils');

const rawResponse = `[
    {"username":"ali","hair_color":"brown","height":1.2},
    {"username":"marc","hair_color":"blue","height":1.4},
    {"username":"joe","hair_color":"brown","height":1.7},
    {"username":"zehua","hair_color":"black","height":1.8}
]`;

const PORT = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(sanitizeResponse(JSON.parse(rawResponse))))
}).listen(PORT, error => {
    if (error) return console.error(error)
    console.log(`to lookup the improved json-encoded, please make a http request to -> [GET] http://localhost:${PORT}`);
});
