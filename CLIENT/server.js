const express = require('express');
const app = express();
const path = require('path');

const port = 3020;

app.use("/TemplateData",express.static(__dirname + "/TemplateData"));
app.use("/Build",express.static(__dirname + "/Build"));
app.use(express.static(path.join(__dirname)));

app.listen(port, () => console.log('client is running'))