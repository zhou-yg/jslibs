var handlebarsConfig = require('./tasks/config/handlebars.js');
var concatConfig = require('./tasks/config/concat.js');
var useminConfig = require('./tasks/config/usemin.js');


var useminRegister = require('./tasks/register/usemin.js');

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
    require("time-grunt")(grunt);

    handlebarsConfig(grunt);
    useminConfig(grunt);

    useminRegister(grunt);
};