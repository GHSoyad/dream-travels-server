const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const destinations = require('./data/destinations.json');

app.get('/', (req, res) => {
    res.send('Server Running')
})

app.get('/destinations', (req, res) => {
    res.send(destinations)
    console.log(destinations)
})

app.get('/destinations/:id', (req, res) => {
    const destinationID = req.params.id;
    const getDestination = destinations.find(destination => destination.id == destinationID);
    res.send(getDestination);
})

app.listen(port, () => {
    console.log('Server running on port', port)
})