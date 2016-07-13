moin.on({}, ()=> {
    console.log("I get executed on any event!");
});
moin.on({
    event: "testEvent",
    x: 3
}, ()=> {
    console.log("I get executed on event 'testEvent' and an x value of 3. The y value is ignored");
});
moin.on({
    event: "testEvent",
    x: 3,
    y: 10
}, ()=> {
    console.log("I get executed on event 'testEvent' and an x value of 3 and an y value of 10.");
});
moin.on({
    event: "testEvent",
    x: 3,
    y: 10
}, ()=> {
    console.log("I get executed on event 'testEvent' and an x value of 3 and an y value of 10.");
});
moin.on({
    event: "testEvent",
    x: (x)=>x > 2,
    y: (y)=>y < 20
}, ()=> {
    console.log("I get executed on event 'testEvent' and an x value greater 2 and an y value of less than 20.");
});