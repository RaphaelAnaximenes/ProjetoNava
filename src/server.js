import { read } from 'fs';
import http from 'http'
import {Readable} from 'stream'
import{randomUUID} from 'crypto'


function* run (){
    for (let index = 0; index <= 50; index++) {
        const data = {
            id: randomUUID(),
            name: `RaphaelRequisition-${index}`
        }

        yield data
    }
}

async function handler(req, res) {

   const readable = new Readable({
        read() {
        for(const data of run()){    
            console.log(`Enviando: `, data)
            this.push(JSON.stringify(data) + "\n")
        }
            this.push(null)
        }})

    readable
        .pipe(res)
        

    /*res.end('Renderizando! - Server')
      Não pode usar com pipe, senao fecha a  rendering      */
}

http.createServer(handler)
.listen(3000)
.on('listening', () => console.log('Server running at 3000'));