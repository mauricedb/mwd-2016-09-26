$(function() {
    var chatHub =  $.connection.chatHub;

    chatHub.client.broadcast = function(e) {
        console.log(e);
        //$('<li>').text(e.data).appendTo('#messages');
    }

    $.connection.hub.start();

    $('#send').click(function() {

        chatHub.server.sendMessage($('#msg').val());

    });
});