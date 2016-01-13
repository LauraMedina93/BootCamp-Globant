app.controller('myWeather', function($scope, $http) {
    $scope.data = [];

    $scope.removeCity = function(weather) {
        var i = $scope.data.indexOf(weather);
        $scope.data.splice(i, 1);
    };
    $scope.searchCity = function() {
        var city = $scope.cities;
        var province = $scope.provinces;
        $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%E2%80%8B%2C%20' + province + '%E2%80%8B%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(function(response) {
            $scope.data.push({city: response.data.query.results.channel.location.city, country: response.data.query.results.channel.location.country,
                date: response.data.query.results.channel.item.condition.date, text: response.data.query.results.channel.item.condition.text,
                code: response.data.query.results.channel.item.condition.code, temp: response.data.query.results.channel.item.condition.temp,
                tempUnit: response.data.query.results.channel.units.temperature, pressure: response.data.query.results.channel.atmosphere.pressure,
                presUnit: response.data.query.results.channel.units.pressure, humidity: response.data.query.results.channel.atmosphere.humidity,
                wind: response.data.query.results.channel.wind.speed, windUnit: response.data.query.results.channel.units.speed});

        });
        $scope.cities = "";
        $scope.provinces = "";
    };
});


