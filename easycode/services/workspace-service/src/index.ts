import express from 'express';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('workspace-service is healthy');
});

app.listen(PORT, () => {
  console.log('workspace-service listening on port ${PORT}');
});
