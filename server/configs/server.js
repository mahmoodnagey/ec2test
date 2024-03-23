const app = require("./app");
const http = require('http');
const server = http.createServer(app);


// server.listen(process.env.PORT || 4000, () => {
//     console.log(`Server is up and runing on port ${process.env.PORT}!`)
// })

server.listen(5001, () => {
    console.log(`Server is up and runing on port 5001`)
})


module.exports = app