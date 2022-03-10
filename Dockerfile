FROM node:16

# Install app dependencies
COPY package*.json ./
RUN npm install --quiet

# Bundle app source
COPY . .

# Build app
RUN npm run cloud-run-build

# Start app
EXPOSE $PORT
CMD [ "node", "dist/app.js" ]