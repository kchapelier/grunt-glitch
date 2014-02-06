var MemoryStream = require('memorystream');
var GlitchedStream = require('glitch').GlitchedStream;
var fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('glitch', 'Clean files and folders.', function() {
    var options = this.options({
      enabled : false,
      deviation: 2,
      probability: 0.0001,
      whiteList: [],
      blackList: [],
      deviationFunction: null,
      force : false
    });

    if(!options.enabled) {
      grunt.log.warn('Glitch task isn\'t explicitly enabled.');
      return;
    }

    var done = this.async();
    var count = 0;
    var multiDone = function() {
      count++;
      if(count === this.filesSrc.length) {
        done();
      }
    }.bind(this);

    this.filesSrc.forEach(function(filepath) {
      var rstream = fs.createReadStream(filepath);
      rstream.on('end', function() {
        fs.writeFile(filepath, mstream.toBuffer(), function() {
          multiDone();
        });
      });
      rstream.on('error', function() {
        if(options.force) {
          multiDone();
        } else {
          done(false);
        }
      });
      var mstream = new MemoryStream(null, { readable : false });
      var gstream = new GlitchedStream(options);
      rstream.pipe(gstream).pipe(mstream);
    });
  });

};