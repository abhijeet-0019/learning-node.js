const path = require('path')

const a = path.dirname('C:\\temp\\myfile.html')
console.log(path.basename('C:\\temp\\myfile.html'));
console.log(a)
const a1 = path.extname(__filename)
const a2 = path.extname(__dirname)
console.log(a1)
// console.log(a2)
