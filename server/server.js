'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
const logger = require('../lib/logger');

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};





// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    //app.start();
    //Socket.IO
    app.io = require('socket.io')(app.start());
    
    logger.debug("Server socket ON")
    
    app.io.on('connection', function(socket){
      console.log('Socket client connected');
      
      socket.on('message', function(msg){
        console.log(msg);
      })
      
      socket.on('disconnect', function(){
          console.log('Socket Client disconnected');
      });
    });
});
