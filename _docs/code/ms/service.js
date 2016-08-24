moin.on({
    event: "test"
}, ()=>moin.hello(moin.getSettings().name));

moin.emit("test");