const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/flights')

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("open", () => {
  console.log("mongo connected: ");
});
db.on("close", () => console.log("mongo disconnected"));

module.exports = db;