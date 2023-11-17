import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

// app.use();

app.get('/', (req, res) => {
  res.send('TypeScript Server!');
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
