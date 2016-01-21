
describe("Test controller myWeather", function()
{
    beforeEach(module("weather"));
 
    describe("myWeather", function()
    {
        var scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller)
        {
            scope = $rootScope.$new();
            ctrl = $controller("myWeather", {$scope:scope});
        }));
 
        it("debe estar definida la variable data", function()
        {
            expect(scope.data).toBeDefined(); 
        });
         it("debe estar definida la variable cities", function()
        {
            expect(scope.cities).toBeDefined(); 
        });
    });
 });
