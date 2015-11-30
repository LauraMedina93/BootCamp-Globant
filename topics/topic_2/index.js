//exercises - topic2

function Movie( title, year, gender ) { //class Movie
 
  this.title = title;
  this.year = year;
  this.gender = gender;

}

Movie.prototype.play = function () { 
  return this.title + " is playing... This film is from " + this.year + " and is a one of "+ this.gender + ". Enjoy!";
};
Movie.prototype.stop = function(){
    return this.title + ": this film was stopped";
};

var transformers = new Movie ("Transformers", "2014", "Action");
var insidious = new Movie ("Insidious", "2010", "Terror");

console.log(insidious.play());
console.log(transformers.stop());

function DownloadableMovie(){
    Movie.call(this);
}


