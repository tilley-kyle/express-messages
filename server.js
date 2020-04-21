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

app.listen(port, () => {
  console.log('Listening on port', port);
});

//create a message    'api/messages'

//retrieve all messages, array of objects    'api/messages'

//update a specific message    'api/messages/1'

//delete a specific message    'api/messges/1'

//get a specific message       'api/messages/1'



module.exports = app;
