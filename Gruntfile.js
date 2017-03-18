

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: '/sass/**/*.sass',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'style.css': 'style.sass'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: true
                }
            }
        }
    });
 
 grunt.loadNpmTasks('grunt-browser-sync');
   grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
grunt.registerTask('default', ['browserSync', 'watch']);
};
