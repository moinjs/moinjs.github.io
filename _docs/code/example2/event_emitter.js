moin.emit("testEvent", {
    x: 3, y: 10
}).then((results)=> {
    console.log("Return values", results.values);//[5,2]
    console.log("Errors", results.errors);//["Error"]
    console.log("Handlers for this event:",results.stats.handler);//3
    console.log("Resolved Handler:",results.stats.resolve);//2
    console.log("Rejected Handler:",results.stats.rejected);//1
});
//You also have an Optional 3. parameter which sets an Timeout for the Handler.

moin.emit("testEvent", {
    x: 3, y: 10
}).then((results)=> {
    console.log("Return values", results.values);//[5]
    console.log("Errors", results.errors);//["Error"]
    console.log("Handlers for this event:",results.stats.handler);//3
    console.log("Resolved Handler:",results.stats.resolve);//1
    console.log("Rejected Handler:",results.stats.rejected);//1
    console.log("Rejected Handler:",results.stats.timeout);//1
},1000);