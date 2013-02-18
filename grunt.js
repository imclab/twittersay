module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['grunt.js', 'bin/**/*', 'lib/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {
        exports: true
      }
    },
    shell: {
      // Generate documentation
      makeDocs: {
        command: 'ls && doxx --source . --ignore test,public,node_modules --target docs'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

  // Shell tasks
  grunt.loadNpmTasks('grunt-shell');
  
};
