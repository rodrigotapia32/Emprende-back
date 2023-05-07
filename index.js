const http = require('http')

function requestController() {
  console.log("hola mundo!!")
}

const server = http.createServer(requestController)

server.listen(4000)

