import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('User Service is healthy');
});

// We will add user-related routes here later.

app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});
