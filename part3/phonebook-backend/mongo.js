const mongoose = require('mongoose')

if(process.argv > 5) {
  console.log('give password, contact name, and contact number as argument');
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://phonebook:${password}@cluster0.oeoqpde.mongodb.net/Phonebook?appName=Cluster0`

mongoose.set("strictQuery", false)

mongoose.connect(url, {family: 4})

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Phone = mongoose.model('Phone', phoneSchema)

const phone = new Phone({
  name: process.argv[3],
  number: process.argv[4]
})

phone.save().then(result => {
  console.log('phone saved');
  mongoose.connection.close()
})