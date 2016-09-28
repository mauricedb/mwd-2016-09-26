$(function () {

    $('#btnNoToken').click(function () {
        $.ajax('/api/hello')
            .then(function (data) {
                $('#result').text(JSON.stringify(data));
            }, function (err) {
                $('#result').text(JSON.stringify(err));
            });
    });

    $('#btnWithToken').click(function () {
        $.post('/token', {
            username: 'maurice',
            password: 'secret',
            grant_type: 'password'
        }).then(function(rsp) {
            console.log(rsp);

            $.ajax('/api/hello', {
                    headers: {
                        Authorization: rsp.token_type + ' ' + rsp.access_token
            }
                })
                .then(function (data) {
                    $('#result').text(JSON.stringify(data));
                }, function (err) {
                    $('#result').text(JSON.stringify(err));
                });

        }, function(err) {
            console.error(err);
        });

    });

});
