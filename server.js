const express = require('express');
const app = express();

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
// const pool = require('./db/pgconfig');

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, (req, res) => {
  console.log('Listening on port', port);
});

//create a message    'api/messages'
app.post('api/messages', (req, res) => {

});

//retrieve all messages, array of objects    'api/messages'
app.get('api/messages', (req, res) => {

});

//update a specific message    'api/messages/1'
app.put('api/messages/1', (req, res) => {

});

//delete a specific message    'api/messges/1'
app.delete('api/messages/1', (req, res) => {

});

//get a specific message       'api/messages/1'
app.get('api/messages/1', (req, res) => {

});



module.exports = app;
