require.config({
    packages:[{
        name:'lib',
        location:'lib/'
    }],
    paths:{
    }
});

require(['q'],function(Q){

    console.log('load hanmmer ,',Q);
});