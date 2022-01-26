const http = require("http")
const fs = require("fs")
const { exit } = require("process")
const args = require("minimist")(process.argv)
// console.log(args)

const port = args["port"] || process.env.PORT || 3000

const server = http.createServer((req, res) => {
  let webpage
  try {
    webpage = fs.readFileSync("www/index.html", "utf8")
  } catch (err) {
    console.log(err)
    exit(1)
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')  
  res.end(webpage)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})