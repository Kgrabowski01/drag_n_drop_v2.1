'use strict';

angular.module('dragNDropV2App')
.controller('UploadCtrl', ['$scope', function ($scope) {
  var vm = this;
  console.log(vm.imagess)
  vm.uploadFile = function (event){
    var files = event.target.files;
    for ( var i = 0, img ; img = files[i]; i++ ) {
      var item = URL.createObjectURL(files[i]);
      vm.images.push(item);
    }
    $scope.$apply();
  };
}]);
