module.exports = function(grunt) {
    'use strict';
    //load npmtask
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat-sourcemaps');

    //configure task
    grunt.initConfig({

        srcjsFiles: [
            'src/modules/management-module/management-app.js', 'src/modules/management-module/scripts/**/*.js'
        ],
        testjsFiles: ['tests/unit/**/*.js'],
        e2ejsFiles: ['tests/e2e/**/*.js'],
        srchtmlFiles: ['src/**/*.html'],
        srccssFiles: ['src/modules/**/*.css'],

        concat: {
            management: {
                dest: 'src/js/management.js',
                src: '<%= srcjsFiles %>'
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['Gruntfile.js','<%= srcjsFiles %>'],
            tests:  ['<%= testjsFiles %>'],
            e2e:  ['<%= e2ejsFiles %>']
        },

        clean: {
            js: ['src/js/management.js'],
            coverage: ['coverage']
        },

        // The actual grunt server settings
        connect: {
            options: {
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    port: 9090,
                    open: true,
                    base: 'src'
                }
            }
        },

        watch: {
            js: {
                files: ['<%= srcjsFiles %>', '<%= testjsFiles %>'],
                tasks: ['lintjs', 'concat:management']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'src/js/management.js',
                    '<%= srchtmlFiles %>',
                    '<%= srccssFiles %>'
                ]
            }
        },

        karma: {
            test: {
                configFile: 'karma.conf.js'
            },
            build: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS'],
                reporters: ['progress'],
                autoWatch: false,
                singleRun: true
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // Default config file
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            test: {
                options: {
                    configFile: "protractor.conf.js", // Target-specific config file
                    args: {
                    } // Target-specific arguments
                }
            },
            travis: {
                options: {
                    configFile: "saucelabs.protractor.conf.js", // Target-specific config file
                    args: {
                    } // Target-specific arguments
                }
            }
        }
    });

    // makes jshint optional
    grunt.registerTask('lintjs', function() {
        if (grunt.file.exists('.jshintrc')) {
            grunt.task.run('jshint');
        }
        else {
            grunt.log.writeln('Warning: .jshintrc file not found. Javascript not linted!');
        }
    });

    grunt.registerTask('serve', 'start a connect web server', function () {
        grunt.task.run([
            'lintjs',
            'clean:js',
            'concat',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('unitTest', ['karma:test']);
    grunt.registerTask('e2eTest', ['protractor:test']);
    grunt.registerTask('default', 'serve');

    grunt.registerTask('CITest', ['concat', 'karma:build', 'protractor:travis']); //runs automatically after push to repository.

};