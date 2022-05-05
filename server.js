#!/usr/local/bin/node
const http = require("http")
const fs = require("fs")
const { exit } = require("process")
const args = require("minimist")(process.argv)
// console.log(args)

const port = args["port"] || process.env.PORT || 3000


fs.readFile("./www/index.html", "utf8", (err, data) => {

  if (err) {
    console.error(err)
    return
    // exit(1)
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')  
    res.end(data)
  })

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })

})