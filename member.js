function skillsMember(){
    return{
        restrict:'E',
        templateUrl:'modules/skills/views/member.html',
        controllerAs:'vm',
        blindToController:true,
        scope:{
            member:'='
        }
    }
}