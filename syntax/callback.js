
var b = function(){
    console.log('B');
}

function slowfunc(callback){
    callback();
}

slowfunc(b);
