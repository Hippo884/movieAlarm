const http = require("http")
const scheduler = require("node-schedule")
const cheerio = require("cheerio")
const request = require("request")

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello World !@#$')
})

server.listen(3000, () => {
    console.log("server is running...")
})