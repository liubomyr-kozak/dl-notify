var app = angular.module('multiNotification', ['dl.notify']);

app.controller('app', ['$scope', function( $scope ){

  $scope.flag = true;

  $scope.triggerNotification = function(){
    if($scope.flag){
      $scope.flag = !$scope.flag;
      $scope.$broadcast('dlNotifyShow')
    }else{
      $scope.flag = !$scope.flag
    }
  }

}]);