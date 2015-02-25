module.exports = function (grunt) {

  grunt.initConfig({

    express: {
      test: {
        options: {
          script: 'server.js',
          port: 8000
        }
      }
    },

    casperjs: {
      files: ['src/test/**/*.js']
    },

    curl: {
      resetCoverage: {
        src: {
          url: 'http://localhost:8000/coverage/reset',
          method: 'POST'
        },
        dest: 'coverage/reset_coverage.dump'
      },

      downloadCoverage: {
        src: 'http://localhost:8000/coverage/download',
        dest: 'coverage/report.zip'
      }
    },

    unzip: {
      'coverage/report': 'coverage/report.zip'
    }

  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-casperjs');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('test', ['express:test', 'curl:resetCoverage', 'casperjs', 'curl:downloadCoverage', 'unzip']);

};
