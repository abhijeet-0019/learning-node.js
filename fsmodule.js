const fs = require('fs')

fs.readFile('index.js', 'utf8', (err, data)=>{
    console.log("hello", err, data)
})

const a = fs.readFileSync('index.js')
console.log("reading file --->",a)
console.log("reading file as string --->",a.toString())
fs.writeFile("file.txt", "This is the file I am writting into", ()=>{
    console.log("Written to the file")
})


console.log("It will be printed first, before the data, error and hello")

