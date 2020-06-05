# webmonetizationhelper
Javascript Helper for implementing WebMonetization Specification (https://webmonetization.org/)


## Use the library

To consume this library, just add in the header the library, either its full or minified version

### Calling methods

1. First, you must instantiate the WebMonetization class, which receives as a parameter the wallet's payment pointer.

**For example**: *var webMon = new WebMonetization(pointer);* 

2. Then, you must initialize the process using the start method, which will dynamically create the necessary meta tag.

**For example**: *webMon.start();* 

3. If you want to find out if the browser supports WebMonetization, you can use the isBrowserEnabled method

**For example**: *webMon.isBrowserEnabled();* 

4. If you want to find out the status of WebMonetization (pending, started, finished, undefined) you can use the getMonetizationState method

**For example**: *webMon.getMonetizationState();* 

5. When using the start method to use WebMonetization, you should register a callback to execute activities within your page (for example, that div be displayed or display images, among others), in the same way when the state is in process, pending initialization or has stopped, you can use the following methods:

- *webMon.registerStartListener(callbackFunction);* 
- *webMon.registerProgressListener(callbackFunction);* 
- *webMon.registerPendingListener(callbackFunction);* 
- *webMon.registerStopListener(callbackFunction);* 

6. And if you want to stop the WebMonetization process, you can execute the stop method

**For example**: *webMon.stop();* 

7. If at any time you need to change the wallet assigned when initializing the helper, you can use the changePointer method

**For example**: *webMon.changePointer(newpointer);* 

### Next steps

My next steps are to optimize this library and allow its use directly from other frameworks, such as NodeJS, React, among others
