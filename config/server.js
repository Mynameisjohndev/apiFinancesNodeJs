const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const server = express()
const cors = require('cors');

//require('../api/billingCycle/billingCycle');
//const BS = mongoose.model('billingCycle');

server.use((req, res, next)=>{
   res.header("Access-Control-Allow-Origin", "*")
   server.use(cors());
   next();
})
server.use(bodyparser.urlencoded({ extended: false }));
server.use(bodyparser.json());
server.use(bodyparser.raw());

// server.get('/teste', (req, res) => {
//     BS.find().lean().then((bs)=>{
//         res.send(bs)
//     }).catch((err)=>{
//         res.send("Error" + err)
//     });
// });

const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
    console.log(`Server is running in port  ${PORT}:)!`)
});

module.exports = server;