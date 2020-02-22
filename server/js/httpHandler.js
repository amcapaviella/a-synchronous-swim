const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const url = require('url');

// Path for the background image ///////////////////////
var backgroundImageFile = path.join('/', 'background.jpg')

//console.log(backgroundImageFile);
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};


module.exports.router = (req, res, next = ()=>{}) => {

  // if (req.url === '/background') { res.writeHead(200, headers); res.end()}

  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // console.log('Before: messageQueue=', messageQueue.messages)

  // console.log('dequeueMessage: dequeueMessage=>', dequeueMessage)
  var request = url.parse(req.url, true)
  // console.log(request.pathname + " === " +req.url)
  var action = request.pathname;
  // console.log(action)

  if(action ==='/background.jpg'){
    console.log(action);
    var image = fs.readFileSync('./js/background.jpg')
    res.writeHead(200, {'Content-Type':'image/jpg'});
    res.end(image, 'binary');

  } else {

    res.writeHead(200, headers);
    var dequeueMessage = messageQueue.dequeue();
    res.end(dequeueMessage);

  }
  // res.end(backgroundImageFile)
  // console.log('After: messageQueue=', messageQueue.messages)
  // console.log('=============================')
  next(); // invoke next() at the end of a request to help with testing!
};

// console.log(module.exports)
