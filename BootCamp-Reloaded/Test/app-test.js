describe("Test controller myWeather", function()
{
    beforeEach(module('weather'));
    var $controller; 
 
        beforeEach(inject(function(_$controller_)
        {
            $controller = _$controller_;
        }));
 describe ('$scope', function(){
     it("data must return an array", function()
        {
            var $scope = {};
            var controller = $controller('myWeather', {$scope : $scope});
            $scope.searchCity();
            expect($scope.data).toEqual([]); 
        });
        it("cities must be defined and return a string", function()
        {
            var $scope = {};
            var controller = $controller('myWeather', {$scope : $scope});
            $scope.searchCity();
            expect($scope.cities).toBeDefined();
            expect($scope.cities).toEqual('');
        });
        it("provinces must be defined and return a string", function()
        {
            var $scope = {};
            var controller = $controller('myWeather', {$scope : $scope});
            $scope.searchCity();
            expect($scope.provinces).toBeDefined();
            expect($scope.provinces).toEqual('');
        });
 });
    });
