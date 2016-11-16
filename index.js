const ProgressBar = require('progress');
const request = require('request');
const fs = require('fs');

exports.download = function(url,fileName,callback){
    var req = request({
                    method: 'GET',
                    uri : musicUrl
                });
                req.pipe(fs.createWriteStream(fileName));
                req.on( 'response', function ( res ) {
                    var len = parseInt(res.headers['content-length'], 10);
                    var size = (len/1024)/1024;
                    console.log("File Size : "+parseFloat(size).toFixed(2)+" MB");
                    console.log();
                    var bar = new ProgressBar('  downloading [:bar] :percent :etas', {
                        complete: '=',
                        incomplete: ' ',
                        width: 20,
                        total: len
                    });
                    
                    res.on('data', function (chunk) {
                        bar.tick(chunk.length);
                    });
                    
                    res.on('end', callback);
                });

}