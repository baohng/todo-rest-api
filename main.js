import express from "express";
import bodyParser from 'body-parser';

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
  res.json({ "message": "Welcome to Todo rest api app!" });
});

// listen for request
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});

