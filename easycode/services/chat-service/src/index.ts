import express from 'express';

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('chat-service is healthy');
});

app.listen(PORT, () => {
  console.log('chat-service listening on port ${PORT}');
});
