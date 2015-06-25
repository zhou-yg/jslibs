module.exports = function(grunt){
    grunt.config.set('useminPrepare',{
        html:'usemin/build.html',
        options:{
            dest:'usemin/'
        }
    });

    grunt.config.set('usemin',{
        html:'usemin/target.html',
        options:{
            assetsDir:'/'
        }
    })
};