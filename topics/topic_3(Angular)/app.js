var app = angular.module("angular", []);

app.controller("mainController", ["$scope", function($scope)
    {
    $scope.movies =
        [
        { name: "El Conjuro",
            description: "El argumento está basado en un caso real que tuvo lugar \n\
            en una granja, en donde una familia empieza a ser testigo de fenómenos paranormales."},
        { name: "La Llamada",
            description: "Se centra en una cinta de video maldita misteriosa que contiene \n\
            una serie aparentemente aleatoria de inquietantes imágenes."},
        {name: "El Resplandor",
            description: "La película relata la historia de un escritor ex-alcohólico, \n\
            que luego empieza a sufrir inquietantes trastornos de personalidad."},
        {name: "Poltergeist",
            description: "La trama gira en torno a los inquietantes sucesos que acontecen \n\
            en una casa en los suburbios, en la que se sospecha que han ocurrido fenómenos paranormales."}
        ];
        
        //method to add movies
        $scope.addMovie = function() {
            $scope.movies.push({name: $scope.movieBox, description: $scope.descriptionBox});
            $scope.movieBox = "";
            $scope.descriptionBox = "";
        };
        //method to remove movies
        $scope.removeMovie = function(movie) {
            var a = $scope.movies.indexOf(movie);
            $scope.movies.splice(a, 1);
        };
    }]);