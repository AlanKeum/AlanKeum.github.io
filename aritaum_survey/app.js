var app = angular.module('surveyApp', []);

// mainCtrl
app.controller('mainCtrl', function($scope) {
  $scope.page = 0; //초기 시작 페이지
  $scope.answer = ''; // 응답값.
  $scope.progressRate = 0; // Survey 진행율.
  $scope.totSurveyCnt = 13; // 총 survey 개수 설정.
  

  // 다음 페이지 번호 가져오기.
  $scope.getNextPage = function() {
    if($scope.page != $scope.totSurveyCnt) {
      $scope.page += 1;
    } else {
      $scope.page = -1;
    }
  };
  
  // 응답값 저장하기.(1-4번 문항만 저장)
  $scope.setAnswer = function(value) {
    if($scope.page >= 1 & $scope.page <= 4) {
      $scope.answer = $scope.answer + value;
    }
    
    $scope.progressRate = Math.floor(($scope.page / $scope.totSurveyCnt) * 100); // Survey 진행율 계산
    
    $scope.getNextPage();
  };
  
  // Survey 다시하기
  $scope.retry = function(value) {
    $scope.page = 0; // 페이지 초기화
    $scope.answer = ''; // 응답값 초기화
    $scope.progressRate = 0; // Survey 진행율 초기화
  };
  
});
