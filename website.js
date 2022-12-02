import * as http from 'http'
import * as fs from 'fs'

const port = process.env.PORT  || 3000;  //

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    
    if(req.url == '/'){
        res.end('<h1>ELLO</h1><p>there mate!</p>')
    }
    else if(req.url == '/about'){
        res.end('<p>Koi yeh batade me kon hun....</p>')
    }
    else if(req.url == '/boot'){
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)})