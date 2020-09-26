// Use express to create and configure my server
const express = require("express");
const server = express();

//Configure statics files (css, scripts, images)
server.use(express.static("./"));

//Start the server in 3000 port
server.listen(process.env.PORT || 3000);