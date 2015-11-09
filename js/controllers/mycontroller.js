let MyController = function ($scope) {

  $scope.count = 0;
  $scope.likeCount = $scope.count + ' likes';

  $scope.addLike = function () {

    $scope.count = $scope.count + 1;

    if ($scope.count === 1) {
      $scope.likeCount = $scope.count + ' like';
    } else {
      $scope.likeCount = $scope.count + ' likes';
    }
  };

};

MyController.$inject = ['$scope'];

export default MyController;