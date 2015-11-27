$(document).ready(function() {
    $("section").fadeIn("6000");
    $(".alias").focus();
    
     $("#name").click(function() {
        alert("Welcome!");
    });
    
    //welcome+name
    /*$("#name").click(function() {
        var value = $(".alias").val();
        $.ajax({
            url: "http://bootcamp.aws.af.cm/welcome/" + value,
            type: 'GET',
            success: function(data) {
                $("section").html(data.response)
            },
            error: function() {
                $("section").toggleClass("error-txt")
            }
        });*/
    
        //search on spotify
        $(".alias").focus();
        $("#search").click(function(){ 
        var text = $(".alias").val();  
        $.get("https://api.spotify.com/v1/search?q="+text+"&type=album",function(data){
            $(".album").text("");
            for (var i = 0; i < 100; i++) {
            $(".album").append("<img src="+data.albums.items[i].images[2].url+" />");   
            $(".album").append(data.albums.items[i].album_type+" -->");      
            $(".album").append("Title: "+"<strong>"+data.albums.items[i].name+"</strong>"+"--->");
            var address = data.albums.items[i].external_urls.spotify;
            $(".album").append("<a href="+address+">Go to Spotify to listen now!</a><br>")       
      
          };
            });
        });
    });
   
//});
