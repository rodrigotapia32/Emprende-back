require('dotenv').config()

const http = require('http')

function requestController() {
  console.log("hola mundo!!!!!")
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(process.env.PORT, () => {console.log("Aplicacion corriendo en puerto " + PORT)})

