moin.act("sqrt", {
    x: 25
}).then(({error,value})=> {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("sqrt(25) = " + value);
    }
});
moin.act("sqrt", {
    x: -25
}).then(({error,value})=> {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("sqrt(25) = " + value);
    }
});