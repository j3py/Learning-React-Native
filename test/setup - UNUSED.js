
/* CURRENTLY UNUSED!!!! */

var fs = require('fs');
var path = require('path');

function getBabelRC() {
  var rcpath = path.join(__dirname, '..', '.babelrc');
  var source = fs.readFileSync(rcpath).toString();
  return JSON.parse(source);
}

var config = getBabelRC();

config.ignore = function(filename) {
  if (!(/\/node_modules\//).test(filename)) {
    return false; // if not in node_modules, we want to compile it
  } else if ((/\/node_modules\/react-native\//).test(filename)) {
    // its RN source code, so we want to compile it
    return false;
  } else {
    // it's in node modules and NOT RN source code
    return true;
  }
};

require("babel-register")(config);

global.__DEV__ = true;

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

var chai = require('chai');
global.expect = chai.expect;

require("react-native-mock/mock");
