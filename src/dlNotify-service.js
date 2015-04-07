angular.module('dl.notify.service', [])
  .service('dlNotifyService', ['$timeout', '$rootScope', function($timeout, $rootScope){

    var notificationAutoRemoveDelay = 5000;

    var notificationType = {
      info: 'info',
      success: 'success',
      error: 'error',
      warning: 'warning'
    };

    var notificationScope = [];

    var format = function(type, message){
      if ( typeof type == "string" || typeof message == "string" ){
        return {
          type: type,
          message: message
        }
      }else{
        throw new Error('Notification argument is not correctly');
      }
    };

    function removeNotificationFromScope(_notify){
      var idx = notificationScope.indexOf(_notify);

      if(idx >= 0){
        notificationScope.splice(idx, 1);
      };
    };

    function addNotification(notifyObj){

      if (!angular.isDefined(notifyObj))
        throw new Error('Notification arguments is not Defined.');

      var handle;

      function startTimeout() {
        handle = $timeout(removeFromQueue, notificationAutoRemoveDelay);
      };

      function cancelTimeout(){
        if (handle)
          $timeout.cancel(handle);

        handle = null;
      };

      function runAutoRemove(){
        cancelTimeout();
        startTimeout();
      };

      function removeFromQueue() {
        cancelTimeout();
        removeNotificationFromScope(notifyObj);
      };

      notifyObj.runAutoRemove = runAutoRemove;
      notificationScope.push(notifyObj);
    };

    function getCountOfNotifications(){
      return notificationScope[notificationScope.length - 1];
    };

    function getAllNotification(){
      return notificationScope;
    };

    function getNextNotification(){
      return notificationScope[0];
    };

    $rootScope.$watch(
      function () {
        return getNextNotification();
      },
      function (_notify) {

        if (angular.isDefined(_notify)){
          _notify.runAutoRemove();
        }
      },
      true
    );

    return {
      type: notificationType,
      format: format,
      add: addNotification,
      getAllNotification: getAllNotification,
      getCountOfNotifications: getCountOfNotifications
    }
  }]);