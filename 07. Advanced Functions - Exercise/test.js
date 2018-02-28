let f = (function() {

    console.log('sdf')
    let counter = 0;


    return function() {


        console.log(++counter);


    }


})();
