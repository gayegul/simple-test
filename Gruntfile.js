module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		jshint: {
			dev: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
			}
		},
		simplemocha: {
			all: {
				src: ['test/**/*.js']
			}
		},
		watch: {
			all: {
				files: ['lib/**/*.js', 'test/**/*.js', 'index.js'],
				tasks: ['test']
			}
		}
	});

	grunt.registerTask('test', ['jshint:dev', 'simplemocha:all']);
	grunt.registerTask('default', ['test']);
};