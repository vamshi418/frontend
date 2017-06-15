/**
 * 
 */
app.controller('PersonController',function(PersonService,$scope)
	{
		$scope.persons=PersonService.getAllPersons().then(function(response)
		{
			$scope.persons=response.data;
		},function(responce)
		{
			console.log(response.data)
			console.log(response.status)
		})
		$scope.save=function(){
			PersonService.savePerson($scope.person).then(function(response){
			console.log(response.data)
			console.log(response.status)
			},function(response){
			console.log(response.data)
			console.log(response.status)
			})
			}
	})