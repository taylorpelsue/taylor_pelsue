$(document).ready(function () {
    // For smooth scrolling from top to portfolio
    $("#forwardBtn").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#navBar").offset().top
        }, 'slow');

    });

    // For smooth scrolling from portfolio to hangman
    $("#toHangman").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#hangman").offset().top
        }, 'slow');

    });
    // For smooth scrolling from portfolio to rpg
    $("#toRPG").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#rpg").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toTrivia").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#trivia").offset().top
        }, 'slow');

    });
    // For smooth scrolling
    $("#toRPS").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#rps").offset().top
        }, 'slow');

    });
});