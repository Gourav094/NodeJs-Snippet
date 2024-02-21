const {isMainThread, workerData,Worker} = require('worker_threads')

if(isMainThread){
    console.log(`Main thread! process id: ${process.pid}`)
    new Worker(__filename,{
        workerData:[1,5,4,3]
    })
    new Worker(__filename,{
        workerData:[7,5,2,7]
    })
}
else{
    console.log(`Worker thread! process id:${process.pid}`)
    console.log(`${workerData} sorted: ${workerData.sort()}`)
}