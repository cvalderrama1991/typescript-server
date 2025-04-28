import http from 'node:http';
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});
server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});
//# sourceMappingURL=index.js.map