setImmediate(()=>setTimeout(_=>console.log("A")),0);
setImmediate(()=>{console.log("B"),0});
setImmediate(()=>setTimeout(_=>console.log("C")),10);
setTimeout(()=>{console.log("D"),10});