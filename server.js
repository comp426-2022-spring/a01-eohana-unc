const http = require("http")
const fs = require("fs")
// const minimist = require("minimist")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  try {
    const webpage = fs.readFileSync("www/index.html", "utf8")
    res.end(webpage)
  } catch (err) {
    console.log(err)
  } 
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})