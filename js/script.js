$(document).ready(function() {
    $("section").fadeIn("6000");
    $(".alias").focus();
    
     $(".button1").click(function() {
        alert("Welcome!")
    });
    //welcome+name
    $("button").click(function() {
        var value = $(".alias").val();
        $.ajax({
            url: "http://bootcamp.aws.af.cm/welcome/" + value,
            type: 'GET',
            success: function(data) {
                $("section").html(data.response)
            },
            error: function(error) {
                $("section").toggleClass("error-txt")
            }
        });
        //search on spotify
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=Rolling+Stones&type=album",
            type: 'GET',
            success: function(data) {
                $("section").html(data.response)
                console.log(data.albums);
                for (var i = 0; i < data.albums.items.length; i++) {

                }
            },
            error: function(error) {
                alert(error);
            }
        });
    });
   
});

