console.log('client.js is sourced in');

var numbers = [];

$(document).ready(function () {
    console.log('jquery is loaded');
    getNumbers();

    // add new numbers click function
    $('#newNumbersButton').on('click', function () {
        console.log('new goose button was clicked');
        var newNumbers = {};

        // Add properties to numbers
        newNumbers.first = parseInt($('#numberOne').val());
        newNumbers.second = parseInt($('#numberTwo').val());

        console.log('newNumbers:', newNumbers);

        // Adding new numbers to the numbersArray
        $.ajax({
            method: 'POST',
            url: '/calculator',
            data: newNumbers,
            success: function (response) {
                console.log(response);
                getNumbers();
            }
        })
        numbersToTable();
    });

});

function getNumbers() {
    $.ajax({
        method: 'GET',
        url: '/calculator',
        success: function (response) {
            console.log(response);
            numbers = response;
            numbersToTable();
        }
    })
}

//adding to the DOM
function numbersToTable() {
    $('#numberTableBody').empty();
    for (var i = 0; i < numbers.length; i++) {
        var numerial = numbers[i];
        $('#numberTableBody').prepend(
            '<tr>' +
            '<td>' + numerial.first + '</td>' +
            '<td>' + numerial.second + '</td>' +
            // '<td>' + answer + '</div>' +
            '</tr>' + '<div class="buttons">' + '<tr>' + '<td>' +
            '<button class="add">Add</button>' +
            '<button class="sub">Subtract</button>' +
            '<button class="times">Multiply</button>' +
            '<button class="divide">Divide</button>' + 
            '</td>' + '</tr>' + '</div>'
        );
    }
}
// function postNumbers() {
//     $('#newNumbers').empty();
//     $('#newNumbers').append('<div class="firstNumber">' + newInputNumbers.first + '</div>' +
//         '<div class="secondNumber">' + newInputNumbers.second + '</div>' +
//         '<div class="buttons">' + '<button class="add">Add</button>' +
//         '<button class="sub">Subtract</button>' +
//         '<button class="times">Multiply</button>' +
//         '<button class="divide">Divide</button>' + '</div>');
//     $('.add').on('click', function () {
//         console.log('add button was clicked');
//         $('.buttons').append('<div class="answer">' + addition() + '</div>');
//         function addition() {
//             return parseInt(first) + parseInt(second);
//         }
//     })
//     $('.sub').on('click', function () {
//         console.log('sub button was clicked');
//         $('.buttons').append('<div class="answer">', subtraction(), '</div>');
//         function subtraction() {
//             return parseInt(first) - parseInt(second);
//         }
//     })
//     $('.times').on('click', function () {
//         console.log('multiply button was clicked');
//         $('.buttons').append('<div class="answer">', multiplication(), '</div>');
//         function multiplication() {
//             return parseInt(first) * parseInt(second);
//         }
//     })
//     $('.divide').on('click', function () {
//         console.log('divide button was clicked');
//         $('.buttons').append('<div class="answer">', division(), '</div>');
//         function division() {
//             return parseInt(first) / parseInt(second);
//         }
//     })
// }