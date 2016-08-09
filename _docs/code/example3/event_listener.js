moin.on({
    event: "sqrt"
}, (event)=> {
    return Math.sqrt(event.x);
});

moin.on({
    event: "sqrt",
    x: (x)=>x < 0
}, ()=> {
    throw "Cannot calculate squareroot of a negative number";
});