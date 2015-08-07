testCarousel.directive('photoCarousel', ['$http', function($http){
    return {
        restrict: 'AE',
        templateUrl: 'photoCarousel.html',
        controller: function($scope){
        $scope.photos = void 0;

        $scope._Index = void 0;

        $http.get('images.json').success(function(data){
            $scope.photos = data;
            $scope._Index = 0;
        })

        $scope.isActive = function (index) {
            return $scope._Index === index;
        };

        $scope.showPrev = function () {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
        };

        $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
        };

        $scope.showPhoto = function (index) {
            $scope._Index = index;
        };
    },
    link: function(scope, element, attrs, controller){
    }
    }  
}])