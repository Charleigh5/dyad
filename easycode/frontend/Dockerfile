# Stage 1: Build the React application
FROM node:20-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
# We copy the lock file as well to ensure consistent installs
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:stable-alpine
# Copy the built assets from the builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# Expose port 80 to the Docker network
EXPOSE 80
# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
