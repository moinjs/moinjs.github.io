let app = require("express")();
let server = app.listen(3000, function () {
    console.log("Webserver started")
});

//Send out an event for every get Reguest
app.get("*", function (req, res) {
    moin.emit("httpRequest", {
        method: "get",
        path: req.path
    }, 30000).then(({values,errors,stats})=> {
        //See how many Listeners have responded.
        switch(values.length){
            //No handler returned a Value -> send a 404 Error
            case 0:
                res.status(404).send("Not Found");
                break;
            //One or more Handler have returned a value -> send them to the Browser
            default:
                res.send(values.join("&lt;br/>"));
        }
    })
});

//Close the Server when the Service is unloaded
moin.registerUnloadHandler(()=>server.close());