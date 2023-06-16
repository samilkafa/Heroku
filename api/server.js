const express = require("express");
const server = express();

server.get("/", (req, res) => {
    console.log("Get request...");
    res.json({message: "Welcome to my app!"});
});

module.exports = server;