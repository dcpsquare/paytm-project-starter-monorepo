import express from "express";
const { Datastore } = require('@google-cloud/datastore');
const bodyParser = require('body-parser');
import {LIVE_URL} from "@repo/common/config";

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Configure Datastore
const datastore = new Datastore();

app.get("/", (req, res) =>{
    console.log(LIVE_URL);
    res.json({
        "msg":"success"
    });
});


// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });