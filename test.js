// const { parentPort } = require("node:worker_threads");


// while (true) {
//     // console.log(new Date().getTime());
//     console.log("worker thread")
// }
let z = 0;
for (let i = 0; i < 12234355; i++) {
    z++;
    console.log("worker thread", z);
}

// parentPort.postMessage(z);