# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port (you can change this in each app)
EXPOSE 3000

# Start app
CMD ["node", "index.js"]

