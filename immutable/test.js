var Im = require('immutable');


var a = Im.Map({a:1});
var b = a.set('c',a);

var list = Im.fromJS([{a:'1'}]);

list.forEach(function(){
    console.log.apply(console,arguments);
});

console.log(list.toArray());

