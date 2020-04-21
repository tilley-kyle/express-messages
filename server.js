const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');

// if you are using mongo/mongoose uncomment this line
const Message = require('./db/Message');

// if you are using postgres, uncomment this line
// const pool = require('./db/pgconfig');

const port = 3000;

app.listen(port, (req, res) => {
  console.log('Listening on port', port);
});

app.use(bp.json());
// app.use(bp.urlencoded())   look up the rest of this

//create a message    'api/messages'
app.post('/api/messages', (req, res) => {
  let message = new Message({id: 1, name: 'kyle', message: 'yo yo yo yo'})
  message.save(err => {
    if (err) throw err;
  })
  res.send('I have spoken');
});

//retrieve all messages, array of objects    'api/messages'
app.get('/api/messages', (req, res) => {
  // console.log(req.body, req.params)
  res.send('hi from get all messages');
});

//update a specific message    'api/messages/1'
app.put('/api/messages/:id', (req, res) => {
  res.send('hi from put');
});

//delete a specific message    'api/messges/1'
app.delete('/api/messages/:di', (req, res) => {
  res.send('hi from delete');
});

//get a specific message       'api/messages/1'
app.get('/api/messages/:id', (req, res) => {
  res.send('hi from get one message');
});



app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

module.exports = app;
