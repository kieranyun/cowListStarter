const mysql = require('mysql2');
const db = require('./index.js')

module.exports.getAll = (callback) => {
  db.connection.query(
    `SELECT * FROM cows`,
    (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(err, results)
      }
    }
  )
}

module.exports.insert = (data, callback) => {
  db.connection.execute(
    `INSERT INTO cows (name, description)
    VALUES (?, ?)`, [data.name, data.description],
    (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(err, results)
      }
    }
  )
}
