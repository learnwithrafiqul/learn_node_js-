const {
    Worker, isMainThread, parentPort, workerData,
} = require('node:worker_threads');
const http = require("http");

if (isMainThread) {
    new Worker("./test.js");
}
else {
    console.log("inside worker thread")
   
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        console.log("home page is called");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));