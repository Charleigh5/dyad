import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('API Gateway is healthy');
});

// Service routing
// Example: app.use('/user', createProxyMiddleware({ target: 'http://user-service:3002', changeOrigin: true }));
// We will add more routes here as we build the other services.

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
