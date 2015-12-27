//search bar handler
$(function(){


    var searchField = $('#query');
    var icon = $('#search-btn');

    //Focus event handler
    $(searchField).on('focus', function () {
        $(this).animate({
            width: '100%'
        }, 400);
        $(icon).animate({
            right: '10px'
        }, 400);
    });

    //Blur event handler
    $(searchField).on('blur', function () {
        if(searchField.val() == ''){
            $(searchField).animate({
                width: '45%'
            }, 400, function () {

            });
            $(icon).animate({
                right: '360px'
            }, 400, function () {
            });
        }
    });

    $('#search-form')

});

//search function
function search(){
    //clear Results
    $('#results').html('');
    $('#buttons').html('');

    //get form input
    q = $('#query').val();

    //run get request on api
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyBRIsQnz0YZoMxhCuDj0-Bb4-5zRCm5O30'
        },
        function(data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            console.log(data);
        }
    );
}