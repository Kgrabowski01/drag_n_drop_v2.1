(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .directive('initGallery', function () {
    return {
      restrict: 'AE',
      template: '<input class="dropper" type="file" accept="image/*" custom-on-change="ctrl.uploadFile"><div ng-repeat="img in ctrl.images"><thumbnail data="img"></thumbnail></div>',
      transclude: true,
      controller: 'UploadCtrl',
      controllerAs: 'ctrl',
      bindToController: {
        images:'='
      },
      scope: {},
      link: function($scope, $attrs, $element) {
      }
    }
  })
})();
