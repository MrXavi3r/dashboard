const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
const root = path.join(__dirname, "client", "build");
const transactions = require('./routes/transactions')
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')


dotenv.config({ path: "./config/config.env" });

app.use(express.json()); //built-in middleware, parses incoming requests with JSON payloads
app.use(morgan("dev")); // for colored res status

// transactions routing
app.use('/api/v1/transactions', transactions)

app.use(express.static("client/build")); //serves static files/
app.get("*", (req, res) => res.sendFile("index.html", { root }));

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
