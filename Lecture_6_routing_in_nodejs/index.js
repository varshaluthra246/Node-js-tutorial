import http from 'http'
console.log("routing in Node JS");
const server = http.createServer((req,res) => {
    console.log(req);
    console.log("URL: " , req.url);
// res.end('<h1>Your request has been accepted.');
if(req.url === '/varsha')
{
    res.end("Welcome to the subjectsaholic");
}
else if(req.url === '/srk')
{
    res.end("We are not able to show anything about srk");
}
else {
    res.end("Invalid Request");
}
})


const port = 1000;
server.listen(port, () => console.log(`server is running on port ${port}`))