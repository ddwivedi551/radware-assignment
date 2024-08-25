# Use an official Node.js image
FROM node:22-bullseye-slim

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 3001

# Start the application
CMD ["node", "server.js"]
