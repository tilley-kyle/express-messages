//Message Model
// If you are using mongo/mongoose create your schema here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/messages', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', () => { console.log('Cobra won this time') });
db.once('open', () => {
  console.log('Everyone knows that a mongoose will kill a cobra');
});


let messageSchema = new mongoose.Schema({
  id: Number,
  name: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);     //apparently this is bad. read more on mongoose docs under multiple connections.
                                                              //only have one connection so using this way for now
module.exports = Message;

