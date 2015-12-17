var app = angular.module('weather', ['LocalStorageModule']);

app.controller('mainWeather', function($scope, $http) {
    $scope.data = {};
    $scope.city = "";
    $scope.province = "";

    app.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }]);
    $scope.searchCity = function() {
        $http({
            method: 'GET',
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.city + "%2C%20" + $scope.province + "%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
        }).success(function(data, localStorageService) {
            $scope.data = data.query.results.channel;
            var savedCity = localStorage.getItem('$data');
            $scope.data = savedCity && data.split('\n') || [];
            $scope.$watch = ('data', function() {
                localStorageService.add('data', $scope.data.join('\n'));
            }, true);
            $scope.$apply();
        }).error(function(error) {
            console.log(error);
        });
    };
    $scope.removeCity = function(data) {
        var a = $scope.searchCity.indexOf(data);
        $scope.data.splice(a, 1);
    };
    $scope.hoverIn = function() {
        $scope.hoverEdit = true;
    };

    $scope.hoverOut = function() {
        $scope.hoverEdit = false;
    };
});



