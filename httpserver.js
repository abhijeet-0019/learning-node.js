import * as http from 'http'

const port = process.env.PORT || 3000;  //

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>ELLO</h1><p>there mate!</p>')
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)})