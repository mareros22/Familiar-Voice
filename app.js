
/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://RoseM:FamiliarVoice@familiarvoicecluster.eij5d.mongodb.net/hi?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log("hi");
})*/

const mongoose = require('mongoose')

const url ="mongodb+srv://RoseM:FamiliarVoice@familiarvoicecluster.eij5d.mongodb.net/hi?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
