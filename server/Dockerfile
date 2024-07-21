# Back-End Dockerfile
FROM node:18

WORKDIR /app
COPY server/package*.json ./
RUN npm install
COPY server/ ./

# Expose the port
EXPOSE 5000

CMD ["npm", "start"]
