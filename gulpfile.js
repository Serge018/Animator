const { src, dest, series, watch } 	= require('gulp');
const concat      					= require('gulp-concat');
const terser 						= require('gulp-terser');


const app_name    					= 'Animator';


function dev_build()  
{
  return src('./src/*.js')
  	.pipe(
  		terser(
  		{
			compress : 
			{
				negate_iife 			: false,
				// drop_console 		: true,
				drop_debugger 			: true,
				booleans_as_integers 	: false
			},
			mangle : {},
			keep_classnames : true
		})
	)
    .pipe(concat(app_name+'.dev.js'))
    .pipe(dest('./build/'));
}

function watcher() 
{
	return watch('./src/', series(dev_build));
}

exports.default = dev_build;
exports.watcher = watcher;
