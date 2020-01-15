

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://crud-desafio:ramper@mongo01-dobaq.mongodb.net/book?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("book").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

//module.exports =client// {
    // DB: "mongodb://crud-desafio:ramper@mongo01-shard-00-00-dobaq.mongodb.net:27017/book?ssl=true&authSource=admin"
 

// };


const mongoose = require('mongoose')
mongoose.connect(
 'mongodb+srv://crud-desafio:ramper@mongo01-dobaq.mongodb.net/book?retryWrites=true&w=majority',
 { useNewUrlParser: true }
)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected')
})


module.exports = { db }
