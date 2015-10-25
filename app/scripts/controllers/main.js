'use strict';

angular.module('dragNDropV2App')
.controller('MainCtrl', function ($scope, galleryConfigService) {
  var vm = this;
  vm.images = [];

  if (galleryConfigService.storageName) {
    var filesDataUrl = angular.fromJson(localStorage.img); 
    vm.images = filesDataUrl || [];
  }
});
