# Dockerfile for Node application
# Author: Ricardo Faccioli

# Use a Node.js 18 image with Alpine Linux
FROM node:18-alpine

# Install bash and also git if needed (often useful with npm install)
RUN apk add --no-cache bash

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies quietly, including TypeScript globally and any other build tools
RUN npm install --silent
RUN npm install -g typescript

# Copy the entire src directory to /app/src in the container
COPY src ./src

# You might also need to copy tsconfig.json if you have specific compiler options
COPY tsconfig.json .

# Compile TypeScript to JavaScript
RUN tsc

# Expose port 3000 for the application
EXPOSE 8080

# Set environment variables
ENV ADDRESS=0.0.0.0 PORT=8080

# Command to run the compiled JavaScript file
CMD ["node", "dist/server.js"]
