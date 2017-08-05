console.log('client.js is sourced in');

$(document).ready(function(){
    $('#addNumbers').on('click', function(){
        console.log('Solution button was clicked');
        var first = $('#numberOne').val();
        var second = $('#numberTwo').val();
        $('#newNumbers').append('<div>' + first + '</div>' + 
        '<div>' + second + '</div>' + 
        '<div>' + '<button class="add">Add</button>' +
        '<button class="sub">Subtract</button>' +
        '<button class="times">Multiply</button>' +
        '<button class="divide">Divide</button>' + '</div>');
    });
    $('#clearAll').on('click', function(){
        $('#newNumbers').empty();
    });
});