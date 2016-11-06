
const gulp = require('gulp');
const args = require('yargs').argv;
const config = require('./gulp.config')();
const $ = require('gulp-load-plugins')({ lazy: true });
// const runSequence = require('run-sequence');
// const port = process.env.PORT || config.defaultPort;

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

function getNodeOptions(env) {
  switch (env) {
    case 'dev':
      return {
        script: config.nodeServer,
        delayTime: 1,
        env: {
          'PORT': config.defaultPort,
          'NODE_ENV': 'development',
        },
        watch: [config.server],
      };

    case 'test':
      return {
        script: config.nodeServer,
        delayTime: 1,
        env: {
          'PORT': config.testPort,
          'NODE_ENV': 'test',
        },
        watch: [config.server],
      }
    default:
      console.log("Unknown environment: " + env);
  }
}

function serve(env, callback) {
  const nodeOptions = getNodeOptions(env);

  if (args.verbose) {
    console.log(nodeOptions)
  }

  return $.nodemon(nodeOptions).on('restart', function(env) {
    log('*** nodemon restarted');
    log('files changed on restart:\n' + env);
  }).on('start', function() {
    log('*** nodemon started');
    // startBrowserSync(isDev);
    if (typeof callback !== 'undefined') {
      callback();
    }
  }).on('crash', function() {
    log('*** nodemon crashed: script crashed for some reason');
  }).on('exit', function() {
    log('*** nodemon exited cleanly');
  });
}


gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('test', function() {
  gulp.src(config.tests, { read: true }).pipe($.mocha({ reporter: 'spec' }));
});

gulp.task('serve', function () {
  serve('dev'/* isDev */);
});

gulp.task('serve-test', function () {
  serve('test');
});
