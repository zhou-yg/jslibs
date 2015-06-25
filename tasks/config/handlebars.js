module.exports = function(grunt){
    grunt.config.set('handlebars',{
        files:{
            src:'/handlebars/*.hbs',
            dis:'/handlebars/tmp.js'
        }
    });
};