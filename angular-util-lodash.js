angular.module('life.util.lodash', [])
  .factory('_', function ($window) {
    return $window._;
  });