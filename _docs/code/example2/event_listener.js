moin.on({
    event: "testEvent"
}, (event)=> {
    return event.x + 2;
});

moin.on({
    event: "testEvent"
}, ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>resolve(2), 5000);
    });
});

moin.on({
    event: "testEvent"
}, ()=> {
    throw "Error";
});
