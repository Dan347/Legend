module.exports = function(grunt) {

	// 1. Grunt configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
			// 2. parameters for the "concat" task to follow here:
			dist: {
					src: [
						'Builders/*.js',
						'Entities/*.js',
						'Factories/*.js',
						'libs/*.js'
						],
						dest: 'build/LegendTactics.js',
			}
		},
		
		});
		
		
	// 3. Specify to Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// 4. Specify Grunt tasks to run (what will occur when you type "grunt command"
	grunt.registerTask('default', ['concat']);
	
};