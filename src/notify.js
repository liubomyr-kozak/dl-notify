angular.module('dl.notify', [])
       .directive('dlNotify', ['$timeout', function($timeout){
        return {
          scope: {},
          restrict: 'EA',
          replace: true,
          templateUrl:'../src/notify.html',
          link: function(scope){

            scope.dlNotify = {
              text: 'some blah',
              show: false
            };

            scope.$on('dlNotifyShow', function(event, data){
              scope.dlNotify.show = true;
              $timeout(hideDlNotify, 3000);
            });



            function hideDlNotify(){
              scope.dlNotify.show =  false;
            }
          }
        }
  }]);


//
//directive('', ['', function(){
//  // Runs during compile
//  return {
//    // name: '',
//    // priority: 1,
//    // terminal: true,
//    // scope: {}, // {} = isolate, true = child, false/undefined = no change
//    // controller: function($scope, $element, $attrs, $transclude) {},
//    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
//    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
//    // template: '',
//    // templateUrl: '',
//    // replace: true,
//    // transclude: true,
//    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
//    link: function($scope, iElm, iAttrs, controller) {
//
//    }
//  };
//}]);
//
