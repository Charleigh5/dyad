import express from 'express';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('project-service is healthy');
});

app.listen(PORT, () => {
  console.log('project-service listening on port ${PORT}');
});
