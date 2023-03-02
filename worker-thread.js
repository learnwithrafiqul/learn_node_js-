const { parentPort } = require("node:worker_threads");

let j = 0;
for (let i = 0; i < 6666666666; i++) {
    j++;
    console.log(j);
}

parentPort.postMessage(j);