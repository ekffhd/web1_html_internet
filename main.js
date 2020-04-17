var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    var dataFolder = './data';




    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir(dataFolder, function(error, filelist){

                var title = 'Welcome';
                var description = 'Hello, Node.js';

                var list = `<ol>`;
                var i = 0;
                while(i<filelist.length){
                    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i++;
                }
                list += `</ol>`;

                var template = `
                <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                     ${list}
                     <h2>${title}</h2>
                    <p>${description}</p>
                    </body>
                    </html>
            `;
                response.writeHead(200);
                response.end(template);

            });


        } else{
            fs.readdir(dataFolder, function(error, filelist) {

                var list = `<ol>`;
                var i = 0;
                while (i < filelist.length) {
                    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i++;
                }
                list += `</ol>`;

                fs.readFile(`data/${queryData.id}`, 'utf8', (err, description) => {
                    var template = `
                <!doctype html>
                    <html>
                    <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    </head>
                    <body>
                    <h1><a href="/">WEB</a></h1>
                     ${list}
                     <h2>${title}</h2>
                    <p>${description}</p>
                    </body>
                    </html>
            `;
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }



    } else {
        response.writeHead(404);
        response.end('Not found');
    }




});
app.listen(3000);
