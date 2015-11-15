/*jslint node: true */
"use strict";

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    //lee el archivo package.json y lo transforma en un objeto javascript
    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: require('./grunt/autoprefixer'),
    autopolyfiller: require('./grunt/autopolyfiller'),
    browserify: require('./grunt/browserify'),
    browserSync: require('./grunt/browserSync'),
    clean: require('./grunt/clean'),
    concurrent: require('./grunt/concurrent'),
    cssmin: require('./grunt/cssmin'),
    jshint: require('./grunt/jshint'),
    libsass: require('./grunt/libsass'),
    notify_hooks: require('./grunt/notify'),
    nodemon: require('./grunt/nodemon'),
    traceur: require('./grunt/traceur'),
    uglify: require('./grunt/uglify'),
    watch: require('./grunt/watch')

  });

  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('all', ['jshint', 'browserify', 'traceur', 'autopolyfiller',
    'uglify:production', 'clean','libsass','autoprefixer', 'cssmin']);
  grunt.registerTask('test', ['']);

};

/*
 ** todos los directorios
 *  todos los archivos

 */

