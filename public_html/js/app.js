angular.module('activenetupcomingCoursesForTeachers', []).
  controller('MainController',  ['$scope', '$http', '$sce', function($scope, $http, $sce) { 
    
    $scope.courses = [];    
    
    var url = 'http://api.amp.active.com/v2/search';
    url = $sce.trustAsResourceUrl(url);
    
    $http.jsonp(url, {
        jsonpCallbackParam: 'cb', 
        params:{
          query:'A1.1',
          org_id:'6b1423e1-84b8-4d92-8857-65860e5ace46',
          city:'Toronto',
          start_date:'2017-01-26..2017-03-30',
          api_key:'xshzx6dy2mgrghnruj46t9fz'
        }}).
      then(function(data){
        console.log(data);
      }).catch(function(err){
        console.debug(err);
      });
  }]);

