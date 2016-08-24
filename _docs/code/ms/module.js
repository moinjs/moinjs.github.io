module.exports = (moin, settings)=> {
    let logger = moin.getLogger("test-module");

    //Add an API method for every new service
    moin.on("loadService", (handler)=> {
        handler.addAPI("hello", (name)=> {
            if (settings.angry) {
                logger.error(`Hello, ${name}!`);
            } else {
                logger.info(`Hello, ${name}!`);
            }
        });
    });
};