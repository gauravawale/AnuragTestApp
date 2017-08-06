app
.controller('HelloWorldCTRL',function($scope, $state)
	{
		$scope.name = "Anurag";
		$scope.pagename = $state.current;
	})