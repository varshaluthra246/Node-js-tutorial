console.log("building server");
//creating server in Node JS
import http from 'http'
const server = http.createServer((req, res) => {
    res.end("You requested for something...");
});

const port = 3000;
server.listen(port, () => console.log(`server is running on port = ${port}`))