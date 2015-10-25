/*(function(){
'use strict';
angular.module('dragNDropV2App')

.directive('thumbnail', function (procesingService, galleryConfigService) {
var template = '<canvas height="{{height}}" width="{{width}}"></canvas>';

return {
restrict: 'E',
template: template,
replace: true,
controller: 'UploadCtrl',
controllerAs: 'ctrl',
bindToController: {
data: '='
},
scope: {},
link: function($scope, $element, $attributes) {

console.log (ctrl.data)
var canvas = $element[0];
console.log($element[0])
$scope.height = galleryConfigService.canvasHeight;
$scope.width = galleryConfigService.canvasWidth;
var thumbSize = galleryConfigService.thumbDimension;
var context = canvas.getContext ("2d");
var imageObj = new Image ();
imageObj.src = $attributes.data;
imageObj.onload = function() {
procesingService.procesingImage(imageObj, thumbSize, context, canvas, galleryConfigService.storageName);
};
}
};
});

})();


*/
(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .directive('thumbnail', function (procesingService, localStorageService, galleryConfigService) {

    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      replace: true,
      scope: {
        data: '=',
      },
      link: link
    }

    function link ($scope, $element, $attributes) {
      var canvas = $element[0];
      canvas.height = galleryConfigService.canvasHeight;
      canvas.width = galleryConfigService.canvasWidth;
      var thumbSize = galleryConfigService.thumbDimension;
      var context = canvas.getContext ("2d");
      var imageObj = new Image ();
      imageObj.src = $scope.data;
      imageObj.onload = function() {
        procesingService.procesingImage(imageObj, thumbSize, context, canvas, galleryConfigService.storageName);
      };
    }

  })

})();
