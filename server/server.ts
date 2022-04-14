const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

import mongoose from 'mongoose';
import routes from './routes/routes';
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
http.listen(PORT, () => {
  console.log(`🌎  ==> Server and io now listening on PORT ${PORT}!`);
});

export { io };