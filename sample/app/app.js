var app = angular.module('multiNotification', ['dl.notify']);

app.controller('app', ['$timeout', '$scope', 'dlNotifyService', function($timeout, $scope, notify){

  var successObj = notify.format(notify.type.success, 'Success message');
  var errorObj = notify.format(notify.type.error, 'Error message');
  var warningObj = notify.format(notify.type.warning, 'Warning message');
  var infoObj = notify.format(notify.type.info, 'Info message');


  notify.add(infoObj);
  notify.add(successObj);

  $timeout(function(){
    notify.add(errorObj);
  }, 4000);

  $timeout(function(){
    notify.add(warningObj);
  }, 5000);

  $timeout(function(){
    notify.add(successObj);
  }, 6000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $timeout(function(){
    notify.add(infoObj);
  }, 7000);

  $scope.remove = function(){
    console.log('revome');
  }
}]);