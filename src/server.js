import { read } from 'fs';
import http from 'http'
import {Readable} from 'stream'

async function handler(req, res) {


    function * run (){
        
    }

   const readable = new Readable({
        read() {
        
        
        
        // end data pipeline
        this.push(null)
        }

    }
    )

    readable
        .pipe(res)
        

    res.end('Renderizando! - Server')

}

http.createServer(handler)
.listen(3000)
.on('listening', () => console.log('Server running at 3000'));