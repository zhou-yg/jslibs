module.exports = function(grunt){
  grunt.registerTask('u',[
    'useminPrepare',
    'concat:generated',
    'uglify:generated',
    'usemin'
  ])
};