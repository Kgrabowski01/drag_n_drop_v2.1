(function(){
  'use strict';
  angular.module('dragNDropV2App')

  .factory('procesingService', procesingService);
  procesingService.$inject = ['localStorageService'];

  function procesingService (localStorageService) {
    return {
      procesingImage: procesingImage
    };

    function procesingImage (imageObj, thumbSize, context, canvas, storageName) {
      scaleImage (imageObj, thumbSize);
      context.drawImage (imageObj, canvas.width/2 - imageObj.width/2, canvas.height/2 - imageObj.height/2 , imageObj.width ,imageObj.height);
      fullSizeClick (canvas, imageObj.src);
      localStorageService.toDataUlrArray (imageObj, storageName);
    }

    function scaleImage (imageObj, thumbSize) {
      var thumbDimension = thumbSize;
      var tempObj = imageObj;
      if (tempObj.width > tempObj.height) {
        tempObj.height = (thumbDimension * tempObj.height) / tempObj.width;
        tempObj.width = thumbDimension;
      } else {
        tempObj.width = (thumbDimension * tempObj.width) / tempObj.height;
        tempObj.height = thumbDimension;
      }
      return tempObj;
    }

    function fullSizeClick (elem, target) {
      elem.onclick = function () {
        window.open("" + target + "", "_blank", "width:100%;height:100%");
      };
    }
  }
})();
