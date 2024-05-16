# Base image 
FROM alpine:3.19.1

# Metadata
LABEL maintainer="Shanthu shanthu67890@gmail.com"
LABEL description="Dockerfile for building an white-labeled lite admin panel for managing backend data"
LABEL version="1.0"

# Update package repositories and upgrade installed packages
RUN apk update && \                  
    apk upgrade

# Install required packages
RUN apk add --no-cache nodejs npm

# Create the directory /app for keeping the application code
RUN mkdir -p /app

# Attempt to create the directory and list its contents
RUN mkdir /app/adminPanelLite && ls -al /app

# Set the work directory inside the container 
WORKDIR /app/adminPanelLite

# Copy package.json and package-lock.json to the work directory 
COPY ./package.json ./

# Install the dependencies
RUN npm install 

# Copy the rest of the applications 
COPY . .

# Expose the port 3002
EXPOSE 3002

# Command to run the React app 
CMD ["npm","run", "linstart"]



