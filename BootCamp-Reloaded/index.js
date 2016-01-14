app.controller('myWeather', function($scope, $http, $localStorage) {
    //create the function that saves data
    $scope.$storage = $localStorage.$default({data: []});
    $scope.data = $localStorage.data;
    //create function that search the weather by city and province
    $scope.searchCity = function() {
        var city = $scope.cities;
        var province = $scope.provinces;
        $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%E2%80%8B%2C%20' + province + '%E2%80%8B%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(function(response) {
            var resp = response.data.query.results.channel;
            //push to localStorage
            $localStorage.data.push({
                city: resp.location.city, country: resp.location.country,
                date: resp.item.condition.date, text: resp.item.condition.text,
                code: resp.item.condition.code, temp: resp.item.condition.temp,
                tempUnit: resp.units.temperature, pressure: resp.atmosphere.pressure,
                presUnit: resp.units.pressure, humidity: resp.atmosphere.humidity,
                wind: resp.wind.speed, windUnit: resp.units.speed});
            $scope.data = $localStorage.data;
        });
        //save data in this variables
        $scope.cities = "";
        $scope.provinces = "";
    };
    //function that removes the weather
    $scope.remove = function(clean) {
        var a = $scope.data.indexOf(clean);
        $scope.data.splice(a, 1);
    };
});
