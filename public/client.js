console.log('client.js is sourced in');

var numbers = [];

$(document).ready(function () {
    console.log('jquery is loaded');
    getNumbers();
    // add new numbers click function
    $('#newNumbersButton').on('click', function () {
        console.log('new number button was clicked');
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
    // Clears table body
    $('#clearAll').on('click', function () {
        console.log('clear button was clicked');
        $('#numberTableBody').empty();
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
            '</tr>' + '<div class="buttons">' + '<tr>' + '<td>' +
            '<button class="add">Add</button>' +
            '<button class="sub">Subtract</button>' +
            '<button class="times">Multiply</button>' +
            '<button class="divide">Divide</button>' +
            '</td>' + '</tr>' + '</div>'
        );
    }
    // Click add button will append addition() answer
    $('.add').on('click', function () {
        console.log('add button was clicked');
        $(this).parent().append('<tr>' + '<td>' + 'Addition Answer: ' + addition() + '</td>' + '</tr>')
        function addition() {
            return parseInt(numerial.first) + parseInt(numerial.second);
        }
    })

    // Click sub button will append subtract() answer
    $('.sub').on('click', function () {
        console.log('sub button was clicked');
        $(this).parent().append('<tr>' + '<td>' + 'Subtraction Answer: ' + subtract() + '</td>' + '</tr>')
        function subtract() {
            return parseInt(numerial.first) - parseInt(numerial.second);
        }
    })

    // Click times button will append multiply() answer
    $('.times').on('click', function () {
        console.log('add button was clicked');
        $(this).parent().append('<tr>' + '<td>' + 'Multiplication Answer: ' + multiply() + '</td>' + '</tr>')
        function multiply() {
            return parseInt(numerial.first) * parseInt(numerial.second);
        }
    })

    // Click divide button will append division() answer
    $('.divide').on('click', function () {
        console.log('add button was clicked');
        $(this).parent().append('<tr>' + '<td>' + 'Division Answer: ' + division() + '</td>' + '</tr>')
        function division() {
            return parseInt(numerial.first) / parseInt(numerial.second);
        }
    })
}