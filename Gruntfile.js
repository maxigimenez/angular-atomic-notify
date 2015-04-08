module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default');

    grunt.registerTask('jshintr', [
        'jshint'
    ]);

    grunt.registerTask('build', [
        'uglify:js',
        'cssmin'
    ]);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    './Gruntfile.js', 
                    './src/**/*.js',
                    '!./**/node_modules/**/*.js',
                    '!./**/bower_components/**/*.js'
                ]
            }
        },
        uglify: {
            js: {
                options: {
                    sourceMap: false,
                    mangle: false
                },
                files: {
                    'dist/angular-atomic-notify.min.js': ['src/angular-atomic-notify.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false
            },
            target: {
                files: {
                    'dist/angular-atomic-notify.min.css': ['src/angular-atomic-notify.css']
                }
            }
        }
    });

};