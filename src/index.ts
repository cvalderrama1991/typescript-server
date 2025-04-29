import http from 'node:http';

const port: string | undefined = process.env.PORT;
const host: string | undefined = process.env.HOST;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    }),
  );
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
