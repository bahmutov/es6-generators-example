module.exports = function (grunt) {
  grunt.initConfig({
    regenerator: {
      all: {
        files: [{
          expand: true,
          cwd: 'es6/',
          src: ['**/*.js'],
          dest: 'es5/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-regenerator');
  grunt.registerTask('default', ['regenerator']);
};
