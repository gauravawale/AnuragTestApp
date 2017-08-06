app
    .controller('HelloWorld2CTRL',function($scope, $state)
    {
        $scope.name = "Anurag";
        $scope.pagename = $state.current;
    })