# Use official node.js image to build React
FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy all files into the container
COPY . .

# Expose port 3000 to access the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
