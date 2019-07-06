//this code below copied as is from the example code
//from https://github.com/illuspas/Node-Media-Server & https://www.npmjs.com/package/node-media-server
//npm version (recommended)
//after copying, we have changed the "package.json" file, removed the "test", added "start"...

const NodeMediaServer = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: "*"
  }
};

var nms = new NodeMediaServer(config);
nms.run();
