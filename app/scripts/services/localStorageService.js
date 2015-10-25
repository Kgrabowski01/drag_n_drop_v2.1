(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .factory('localStorageService', localStorageService);
  localStorageService.$inject = [];

  function localStorageService () {

    var base64LocalStorageArray = [];

    return {
      toDataUlrArray: toDataUlrArray,
    };

    function toDataUlrArray (dataUrl, storageName) {
      var tempUrl = dataUrl.src;
      var imgLocalStor = storageName;
      base64LocalStorageArray.push(tempUrl);
      localStorage.setItem(imgLocalStor, JSON.stringify(base64LocalStorageArray));
    };
  };
})();
