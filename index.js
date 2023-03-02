const express = require('express');
const cluster = require('cluster');
const app = express();
const os = require('os');

const cpus = os.cpus().length

app.get("/", (req, res) => {
    for (let i = 0; i < 100; i++) {
        console.log({ "i": i, 'clusterId': process.pid });
    }
    cluster.worker.kill();
    res.json({ success: true, "cluster id": process.pid });
})


if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Waiting for ${worker.process.pid} to exit`);
        cluster.fork();
    });
} else {
    app.listen(3000, () => {
        console.log(`App listening on port =  3000 and process = ${process.pid}`);
    });

}
