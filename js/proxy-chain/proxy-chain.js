/**
 * We are leveraging proxies to intercept property calls
 * and returning the proxy itself so we can keep on chaining infinitely
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
const proxy = new Proxy(
    {},
    {
        get: (_, prop, receiver) => {
            // If the property we are trying to access is called YEET, we will log "YEET" to the console
            if (prop === 'YEET') {
                console.log('YEET');
            }

            // Always return the proxy back
            return receiver;
        },
    },
);

proxy.you.can.call.literally.anything.but.if.you.call.YEET.it.will.log.YEET.to.the.console;
