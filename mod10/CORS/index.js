$(function() {

    $('#btnLoad').click(function() {

        $.ajax('/api/books/1')
            .then(function(book) {
                $('#result').text(JSON.stringify(book));
            }, function(err) {
                $('#result').text(JSON.stringify(err));
            });
    });
})