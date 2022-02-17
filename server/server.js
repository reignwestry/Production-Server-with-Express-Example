/*******************
 *  # BASIC EXPRESS CONFIG
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/*
  # BASIC EXPRESS SETUP
  1) INSTALL EXPRESSjs
    npm i express --save
  2) CREATE A SERVER DIRECTORY
      A) Create a folder named server
      B) Create a file named server.js
  3) In server.js ADD the server config
*/
