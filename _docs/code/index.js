require("moin")().then((moin)=> {
    moin.addServiceFolder("services");
    moin.addServiceFolder("node_modules");
});
