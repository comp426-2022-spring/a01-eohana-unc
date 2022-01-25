const http = require("http")
const fs = require("fs")
const { exit } = require("process")
const args = require("minimist")(process.argv)
// console.log(args)

const port = args["port"] || process.env.PORT || 3000

let tempPageVar

try {
  tempPageVar = fs.readFileSync("www/index.html", "utf8")
} catch (err) {
  console.log(err)
  exit(1)
}

const webpage = tempPageVar

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')  
    res.end(webpage)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})