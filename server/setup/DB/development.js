const mongoose = require('mongoose')

/*
DB SETUP (development)
*/
const DB = (server, config) => {
  const { db } = config
  const connect = () => {
    mongoose.Promise = Promise
    mongoose.connect(db, (err) => {
      if (err) {
        console.warn(`===>  Error connecting to ${db}\n${err}`)
      } else {
        console.log(`===>  Succeeded in connecting to ${db}`)
      }
    })
  }
  connect()

  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)
}

module.exports = DB
