import express from 'express';
import { config } from 'dotenv';
config();

const port = process.env.PORT;
const app = express();

// app.use();

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Server.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
