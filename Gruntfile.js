module.exports = function( grunt ) {

    // Start web server
    // Compile developer friendly environment
    // $ grunt serve

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'examples/css/oklis-image-carousel.css': 'css/oklis-image-carousel.scss'
				}
			}
		},
		jade: {
			dist: {
				options: {
					pretty: true
				},
				files: {
					'examples/index.html': 'jade/index.jade'
				}
			}
		},
		watch: {
			css: {
				files: 'css/*.scss',
				tasks: [ 'sass' ]
			},
			html: {
					files: 'jade/*.jade',
					tasks: [ 'jade' ]
			}
			/*min: {
			files: 'js/*.js',
			tasks: ['min']
			},*/
			/*cssmin: {
				files: 'css/*.css',
				tasks: ['cssmin']
			}*/
		},
		copy: {
			main: {
				expand: true,
				cwd: 'js/',
				src: '*.js',
				dest: 'examples/js/',
				flatten: true,
				filter: 'isFile'
			},
			vendor: {
				expand: true,
				cwd: 'bower_components/jquery/dist/',
				src: 'jquery.js',
				dest: 'examples/js/',
				flatten: true,
				filter: 'isFile'
			}
		}
		/*min: {
		    'dist': {
		        'src': ['js/oklis-image-carousel.js', 'js/base.js'],
		        'dest': 'build/all-own.min.js'
		    }
		},
		cssmin: {
		    'dist': {
		        'src': ['css/oklis-image-carousel.css'],
		        'dest': 'build/oklis-image-carousel.min.css'
		    }
		}*/
	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	//grunt.loadNpmTasks('grunt-yui-compressor');


 	// Compile production files
	grunt.registerTask('build', [
		'jade',
		'sass',
		'copy'
	]);

	grunt.registerTask('default', [
		'build',
		'watch'
	]);
};