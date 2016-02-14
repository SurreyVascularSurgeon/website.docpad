// module.exports = function(grunt) {

//   // Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),

//     cssmin: {
//       options: {
//         banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */'
//       },
//       minify: {
//         expand: true,
//         cwd: 'out/css/',
//         src: ['*.css', '!*.min.css'],
//         dest: 'out/css/',
//         ext: '.min.css'
//       }
//     },

//     uglify: {
//       options: {
//         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//       },
//       build: {
//         src: 'src/<%= pkg.name %>.js',
//         dest: 'build/<%= pkg.name %>.min.js'
//       }
//     }
//   });


//   // Default task(s).
//   grunt.registerTask('default', ['cssmin']);

//   // load plugins
//   grunt.loadNpmTasks('grunt-contrib-cssmin');
// };
