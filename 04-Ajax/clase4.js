/*
PROTOCOLO : {
    GET = busca info
    
    PUT = modifica
    
    DELETE = elimina
    
    POST = agrega info
}

*/


$('.answer').click(function() {
    let meal = {
        location: 'here',
        condiments: 'ketchup',
        idNumber: 191,
    };
    //data contains the data from the server
    $.get('/comboMeal', meal, function(data) {
        //eat is a made-up function but you get the point
        eat(data);
    });
});


$('.answer').click(function() {
    //data contains the data from the server
    $.get('https://jsonplaceholder.typicode.com/', function(data) {
        //eat is a made-up function but you get the point
        console.log(data);
    });
});