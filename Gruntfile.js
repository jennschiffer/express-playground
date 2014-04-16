module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        node: true
      },
      all: [
        'Gruntfile.js',
        'app.js',
        'public/js/*.js'
      ]
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);

};