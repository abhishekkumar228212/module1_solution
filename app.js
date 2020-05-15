(function () {
  'use strict';

  angular.module("LunchItemCheck", [])

  .controller('LunchItemController', LunchFormController);

  LunchFormController.$inject = ['$scope'];
  function LunchFormController($scope) {
    $scope.lunchItem = "";
    $scope.messageForItems = "";
    $scope.style = "";

    $scope.displayForMessage = function () {
      var count = countLunches($scope.lunchItem);
      if (!count) {
        $scope.messageForItems = "Please enter data first";
        $scope.style = {'color': 'red', 'border':'1px solid red'};
      } else {
        if (count <= 3) {
          $scope.messageForItems = "Enjoy!";
        }

        else if (count > 3) {
          $scope.messageForItems = "Too much!";
        }

        $scope.style = {'color': 'green', 'border':'1px solid green'};
      }
    };

    var countLunches = function (str) {
      if(str.length === 0) return 0;
      var lunchArray = str.split(',');
      return lunchArray.length;
    };
  }

})();
