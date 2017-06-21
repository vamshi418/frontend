/**
 * 
 */
app.factory('PersonService',function($http){
var personService={};

personService.getAllPersons=function(){
return $http.get("http://localhost:8081/backendcruddemo/getallpersons")
}	
return personService;
})

if(Person.FirstName.Value==null){
    $scope.Person='';
}else{
    $scope.Person=Person.FirstName.Value
}

personService.savePerson=function(person){
return $http.post("http://localhost:8081/backendcruddemo/saveperson",person)
}