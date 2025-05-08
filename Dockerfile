FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port (matching your .env PORT)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]