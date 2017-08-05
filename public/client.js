console.log('client.js is sourced in');

$(document).ready(function () {
    $('#addNumbers').on('click', function () {
        console.log('Solution button was clicked');
        var first = $('#numberOne').val();
        var second = $('#numberTwo').val();
        $('#newNumbers').append('<div class="firstNumber">' + first + '</div>' +
            '<div class="secondNumber">' + second + '</div>' +
            '<div class="buttons">' + '<button class="add">Add</button>' +
            '<button class="sub">Subtract</button>' +
            '<button class="times">Multiply</button>' +
            '<button class="divide">Divide</button>' + '</div>');
        $('.add').on('click', function () {
            console.log('add button was clicked');
            $('.buttons').append('<div class="answer">', addition(), '</div>');
            function addition() {
                return parseInt(first) + parseInt(second);
            }
        })
        $('.sub').on('click', function () {
            console.log('sub button was clicked');
            $('.buttons').append('<div class="answer">', subtraction(), '</div>');
            function subtraction() {
                return parseInt(first) - parseInt(second);
            }
        })
        $('.times').on('click', function () {
            console.log('multiply button was clicked');
            $('.buttons').append('<div class="answer">', multiplication(), '</div>');
            function multiplication() {
                return parseInt(first) * parseInt(second);
            }
        })
        $('.divide').on('click', function () {
            console.log('divide button was clicked');
            $('.buttons').append('<div class="answer">', division(), '</div>');
            function division() {
                return parseInt(first) / parseInt(second);
            }
        })

    });
    $('#clearAll').on('click', function () {
        $('#newNumbers').empty();
    });
});

