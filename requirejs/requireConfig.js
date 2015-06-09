require.config({
    packages:[{
        name:'lib',
        location:'lib/'
    }],
    paths:{
    }
});

require(['hammer','q'],function(hammer,Q){

    console.log('load hanmmer ,',Q);
});