# Dockerfile for Node application using multi-stage builds
# Author: Ricardo Faccioli

FROM node:18-alpine AS build-stage

# Install bash
RUN apk add --no-cache bash


# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and other npm management files from the host to the current directory in the container
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Builds the application
RUN npm run build  

# Expose port 3000 to access the application
EXPOSE 3000

# Define address
ENV ADDRESS=0.0.0.0 PORT=3000

# Run npm in the foreground
CMD ["npm", "start"]