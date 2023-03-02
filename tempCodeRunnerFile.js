const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // let worker1 = new Worker("./worker-thread.js");
    // let worker2 = new Worker("./worker-thread.js");
    console.log("home page is called");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  }
  //  else if (req.url === "/slow-page") {

  //   const worker_thread = new Worker("./worker-thread.js");
  //   worker_thread.on("message", (j) => {
  //     res.writeHead(200, { "Content-Type": "text/plain" });
  //     res.end(`Slow page ${j}`);
  //   });

  // }
});

server.listen(8000, () => console.log("Server is running on port 8000"));