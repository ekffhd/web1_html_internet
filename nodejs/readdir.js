var dataFolder = './data/';
var fs = require('fs');

fs.readdir(dataFolder, function(err, filelist){
    console.log(filelist);
})
