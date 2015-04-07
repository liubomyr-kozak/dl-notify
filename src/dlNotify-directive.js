angular.module('dl.notify', ['dl.notify.service'])
  .directive('dlNotify', [ '$timeout', '$rootScope', 'dlNotifyService', function( $timeout, $rootScope, notify){
    return {
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl:'src/dlNotify-template.html',
      link: function(scope){

        scope.dlNotify = {};
        scope.moreThanOneNotification = false;
        scope.showBtnBlockNotification = true;
        var showBtnBlockNotification = true

        $rootScope.$watch(
          function () {
            return notify.getCountOfNotifications();
          },
          function () {
            scope.dlNotifyScopeNotifications = notify.getAllNotification();
            checkCurrentBtnDisplay();
            scope.dlNotify.displayContainer = true;

            if(scope.dlNotifyScopeNotifications.length == 0){
              scope.dlNotify.displayContainer = false;
            }
          },
          true
        );

        function checkCurrentBtnDisplay(){
          if(showBtnBlockNotification){
            scope.showBtnBlockNotification = scope.dlNotifyScopeNotifications.length > 1 ? true : false;
          }
        }

        scope.notificationOption = function(){
          scope.dlNotifyScopeNotifications.length > 1 && scope.showBtnBlockNotification
        };

        scope.dlNotifyClose = function(){
          scope.dlNotify.displayContainer =  false;
        };

        scope.dlNotifyShowAll = function(){
          scope.showBtnBlockNotification = false;
          showBtnBlockNotification = false;
          scope.moreThanOneNotification = true;
        };

      }
    }
}]);