var fs = require('fs');


/*
    readFileSync : 동기 - 끝날때 까지 기다린 후, 다음 코드 수행
    [result]
    A
    C
    B
 */
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
/*
    readFile : 비동기 - 끝날때 까지 기다리지 않고, 다음 코드 수행
    [result]
    A
    C
    B
 */
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);

});
console.log('C');


