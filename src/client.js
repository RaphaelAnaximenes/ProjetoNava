import http from 'http'

async function handler(req, res) {
  res.end('Renderizando! - Client')
}

http.createServer(handler)
.listen(4000)
.on('listening', () => console.log('Client running at 4000'));