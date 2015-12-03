$(document).ready(function() {

    var shareWith = {share: function(friendName) {
            console.log("Sharing " + this.title + " with " + friendName);
        }
    };
    var like1 = {likes: function(friendName) {
            console.log(friendName + " likes " + this.title);
        }
    };


    function Movie() {
        this.play = function() {
            console.log("Playing: " + this.title) + (". Enjoy!!!");
        };
        this.stop = function() {
            console.log(("The film ") + this.title + " was stopped.");
        };
        this.set = function(attr, value) {
            this[attr] = value;
        };
        this.get = function(attr) {
            return this[attr];
        };
        this.share = shareWith.share;
        this.like = like1.likes;
        this.arrayOfActors = arrayActors;
    }
    ;

    function actor() {
        this.name;
        this.age;

        this.set = function(name, age) {
            this.name = name;
            this.age = age;
        };
    }
    ;


    var brad = new actor();
    brad.set("Brad Pitt", 45);
    var vin = new actor();
    vin.set("Vin Diesel", 48);
    var arrayActors = [brad, vin];


    var MovieObserver = document;
    var term = new Movie();
    term.set("title", "Terminator");
    term.share("Laura Medina");
    term.like("Viviana Czenczek");


    var play = new Event("playing");
    var stop = new Event("stopped");


    MovieObserver.addEventListener("playing", function() {
        $("h3").text("Playing this film");
        console.log("Playing");
    }, false);

    MovieObserver.addEventListener("stopped", function() {
        $("h3").text("The film was stopped");
        console.log("Stopped")
    }, false);


    $(".butt-play").click(function() {
        MovieObserver.dispatchEvent(play);
    });
    $(".butt-stop").click(function() {
        MovieObserver.dispatchEvent(stop);
    });


    function DownloadableMovie() {
        Movie.call(this);
    }
    ;
    DownloadableMovie.prototype = new Movie();
    

    var downFilm = new DownloadableMovie();
    downFilm.set("title", "Iron Man 2");
    downFilm.play();
 



}); 