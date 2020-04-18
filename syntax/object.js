/*
    array
 */
var members = ['egoing', 'k8805', 'hoya'];
console.log('array loop');

var i = 0;

while( i <members.length){
    console.log(members[i]);
    i ++;
}

/*
    object
 */
var roles = {
    'programmer': 'egoing',
    'designer': 'k8805',
    'manager': 'hoya'
};
console.log('array loop');
for(var name in roles){
    console.log('key: ', name);
    console.log('value: ', roles[name]);
}

