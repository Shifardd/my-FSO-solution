const mongoose = require('mongoose')

if(process.argv.length < 3) {
  console.log('1.give password \nor \n2.give password, contact name, and contact number as argument');
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

if(process.argv.length == 5) {
  phone.save().then(result => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
    mongoose.connection.close()
  })
} else if(process.argv.length == 3) {
  Phone.find({}).then(result => {
    result.forEach(person => {
      console.log(person);
    });
    mongoose.connection.close()
  })
}

