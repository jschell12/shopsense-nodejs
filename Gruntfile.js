module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['lib/*.js', 'test/*-test.js'],
        tasks: ['nodeunit'],
        options: {
          interrupt: true
        }
      }
    },
    nodeunit: {
        all: ['test/*-test.js']
    }
  });


  grunt.registerTask('default', ['nodeunit']);

};
