const { setImmediate } = require("timers");

/*setTimeout(
    function(){
        console.log("set timeout log");
        
    }, 5000
);

setImmediate(function(){
    console.log("setimmediate log");
});

var t1=setInterval(()=>{
    console.log("set Interval")
    },5000);

    console.log("traitement suivant"); //synch

clearInterval(t1);*/
console.log("A");
setImmediate(()=>{console.log("B");});
setImmediate(()=>{console.log("C");});
console.log("D");