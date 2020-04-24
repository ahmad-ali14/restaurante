'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        less: {
            css: {
                files: {
                    'css/styles.css': 'css/styles.less'
                }
            }
        },
        watch: {
            files: 'css/*.less',
            tasks: ['less']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['less']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};


// module.exports = function(grunt) {
//     require('jit-grunt')(grunt);
  
//     grunt.initConfig({
//       less: {
//         development: {
//           options: {
//             compress: true,
//             yuicompress: true,
//             optimization: 2
//           },
//           files: {
//             "css/main.css": "less/main.less" // destination file and source file
//           }
//         }
//       },
//       watch: {
//         styles: {
//           files: ['less/**/*.less'], // which files to watch
//           tasks: ['less'],
//           options: {
//             nospawn: true
//           }
//         }
//       }
//     });
  
//     grunt.registerTask('default', ['less', 'watch']);
//   };