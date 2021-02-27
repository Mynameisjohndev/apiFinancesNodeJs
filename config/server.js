const express = require('express');
const bodyparser = require('body-parser')
const server = express()

server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json());

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running in port  ${PORT}:)!`)
});

module.exports = server;