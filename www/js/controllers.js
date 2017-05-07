angular.module('app.controllers', [])
  
.controller('scheduleCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $firebaseObject, $rootScope) {
    var sc = this;
    $rootScope.schedule = firebase.database().ref('Schedule');
    sc.db = $firebaseArray($rootScope.schedule);
    console.log(sc.db);
    
    $rootScope.SpecificEvent = {}
    sc.availableStartTimes = [
             "7:00 Am",
             "8:00 Am",
             "9:00 Am",
             "10:00 Am",
             "11:00 Am",
             "12:00 Pm",
             "1:00 Pm",
             "2:00 Pm",
             "3:00 Pm",
             "4:00 Pm",
             "5:00 Pm",
             "6:00 Pm",
             "7:00 Pm",
             "8:00 Pm",
             null
            ];
    sc.chosenStartTime;
    sc.availableDates = [
        "11/5/2017",
        "11/6/2017",
        "11/7/2017",
        "11/8/2017"
        ];
    sc.chosenDate;
    sc.showArray = sc.db;
    sc.searchTerm;
    
    sc.search = function(){
        sc.showArray = [];
        sc.edittedTerm = sc.searchTerm.replace(/\s/g, '');

        for(var i = 0; i < sc.db.length; i++){
            
            sc.edittedChair = sc.db[i].chair.replace(/\s/g, '');
            sc.edittedCustomLabel = sc.db[i].customLabel.replace(/\s/g, '');
            sc.edittedDate = sc.db[i].date.replace(/\s/g, '');
            sc.edittedEndTime = sc.db[i].endTime.replace(/\s/g, '');
            sc.edittedEventId= sc.db[i].eventId.replace(/\s/g, '');
            sc.edittedEventTitle = sc.db[i].eventTitle.replace(/\s/g, '');
            sc.edittedEventType = sc.db[i].eventType.replace(/\s/g, '');
            sc.edittedMealType = sc.db[i].mealType.replace(/\s/g, '');
            sc.edittedNote = sc.db[i].note.replace(/\s/g, '');
            sc.edittedRoom = sc.db[i].room.replace(/\s/g, '');
            sc.edittedStartTime = sc.db[i].startTime.replace(/\s/g, '');
            sc.edittedSubjectArea = sc.db[i].subjectArea.replace(/\s/g, '');
            
            sc.holdChair = sc.edittedChair.localeCompare(sc.edittedTerm);
            sc.holdCustomLabel = sc.edittedCustomLabel.localeCompare(sc.edittedTerm);
            sc.holdDate = sc.edittedDate.localeCompare(sc.edittedTerm);
            sc.holdEndTime = sc.edittedEndTime.localeCompare(sc.edittedTerm);
            sc.holdEventId = sc.edittedEventId.localeCompare(sc.edittedTerm);
            sc.holdEventType = sc.edittedEventType.localeCompare(sc.edittedTerm);
            sc.holdMealType = sc.edittedMealType.localeCompare(sc.edittedTerm);
            sc.holdNote = sc.edittedNote.localeCompare(sc.edittedTerm);
            sc.holdRoom = sc.edittedRoom.localeCompare(sc.edittedTerm);
            sc.holdStartTime = sc.edittedStartTime.localeCompare(sc.edittedTerm);
            sc.holdSubjectArea = sc.edittedSubjectArea.localeCompare(sc.edittedTerm);
            
            if(sc.holdChair == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdCustomLabel == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdDate == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdEndTime == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdEventId == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdEventType == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdMealType == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdNote == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdRoom == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdStartTime == 0){
                sc.showArray.push(sc.db[i]);
            }
            if(sc.holdSubjectArea == 0){
                sc.showArray.push(sc.db[i]);
            }
        }
    }

    sc.timeFilter = function(){
        sc.showArray = [];
        for(var i = 0; i < sc.db.length; i++){
            
            var holdNum;
            
            sc.testThing = sc.chosenStartTime.replace(/\s/g, '');
            
            holdNum = sc.db[i].startTime.localeCompare(sc.testThing);
            
            //str = str.replace(/\s/g, '');
            if(holdNum == 0){
                sc.showArray.push(sc.db[i]);
                console.log(sc.showArray[0]);
            }
        }
    }
    
    sc.dateFilter = function(){
        sc.showArray = [];
        for(var i = 0; i < sc.db.length; i++){
            
            var holdNum;
            
            sc.dateHold = sc.chosenDate.replace(/\s/g, '');
            
            holdNum = sc.db[i].date.localeCompare(sc.dateHold);
            
            //str = str.replace(/\s/g, '');
            if(holdNum == 0){
                sc.showArray.push(sc.db[i]);
                console.log(sc.showArray[0]);
            }
        }
        
    }
    
    sc.passEvent = function(eventId, eventType, mealType, startTime, endTime,
                            room, chair, subjectArea, eventTitle, date, firstName,
                            lastName, affiliation, customLabel, note){
        $rootScope.SpecificEvent = 
        {
            "eventId": eventId,
            "eventType": eventType,
            "mealType": mealType,
            "startTime": startTime,
            "endTime": endTime,
            "room": room,
            "chair": chair,
            "subjectArea": subjectArea,
            "eventTitle": eventTitle,
            "date": date,
        /*  "Presenter": 
            [
                {
                "firstName": firstName,
                "lastName": lastName,
                "affiliation": affiliation
                }
		    ],
		    */
            //"customLabel": customLabel,
            //"note": note
        }
        
        
    };
    
}])
   
.controller('presentersCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject','$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $firebaseObject, $rootScope) {
     var pc = this;
    $rootScope.presenters = firebase.database().ref('other');
    pc.db = $firebaseArray($rootScope.presenters);
    console.log(pc.db);
    
    
   
   pc.passPresenters = function(speakerID,firstName, lastName, affiliation, bio, picture){
   
    $rootScope.Presenters ={
        
        
            "speakerID": speakerID,
            "firstName": firstName,
            "lastName": lastName,
            "affiliation": affiliation,
            "bio": bio,
            "picture": picture,
        
        
        };
   }
        

}])
   
.controller('myScheduleCtrl', ['$scope', '$stateParams', '$firebaseArray', '$firebaseObject', '$rootScope', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $firebaseObject, $rootScope, $ionicPopup) {
        var msc = this;
        $rootScope.Save = firebase.database().ref("Save");
        msc.db = $firebaseArray($rootScope.Save);

        msc.availableStartTimes = [
             "7:00 Am",
             "8:00 Am",
             "9:00 Am",
             "10:00 Am",
             "11:00 Am",
             "12:00 Pm",
             "1:00 Pm",
             "2:00 Pm",
             "3:00 Pm",
             "4:00 Pm",
             "5:00 Pm",
             "6:00 Pm",
             "7:00 Pm",
             "8:00 Pm",
             null
            ];
        msc.chosenStartTime;
        msc.availableDates = [
        "11/5/2017",
        "11/6/2017",
        "11/7/2017",
        "11/8/2017"
        ];
        msc.chosenDate;
        msc.showArray = msc.db;
        
        msc.timeFilter = function(){
        msc.showArray = [];
        for(var i = 0; i < msc.db.length; i++){
            
            var holdNum;
            
            msc.testThing = msc.chosenStartTime.replace(/\s/g, '');
            
            holdNum = msc.db[i].startTime.localeCompare(msc.testThing);
            
            //str = str.replace(/\s/g, '');
            if(holdNum == 0){
                msc.showArray.push(msc.db[i]);
                console.log(msc.showArray[0]);
            }
        }
    }
    
        msc.dateFilter = function(){
            msc.showArray = [];
            for(var i = 0; i < msc.db.length; i++){
                
                var holdNum;
                
                msc.dateHold = msc.chosenDate.replace(/\s/g, '');
                
                holdNum = msc.db[i].date.localeCompare(msc.dateHold);
                
                //str = str.replace(/\s/g, '');
                if(holdNum == 0){
                    msc.showArray.push(msc.db[i]);
                    console.log(msc.showArray[0]);
                }
            }
            
        }
            
        msc.alert = function(id){
            
            var alertPopup = $ionicPopup.alert({
                title: 'Removing Event',
                template: 'You are removing this event from your personal schedule.'
            })
            .then(function(res){
                console.log('Please work')
            });
            console.log(id);
            for(var i = 0; i < msc.db.length; i++){
                if(id == msc.db[i].eventId){
                    msc.db.$remove(msc.db[i]);
                    break;
                }
            }
        }
        
        
}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventPlaceholderCtrl', ['$scope', '$stateParams', '$rootScope', '$firebaseArray', '$firebaseObject',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $firebaseArray, $firebaseObject) {
    console.log($rootScope.SpecificEvent)
    var epc = this;
    $rootScope.Save = firebase.database().ref('Save');

    
    epc.event = $rootScope.SpecificEvent;
    console.log(epc.event.note);
    var i;
    epc.addToSchedule = function(){
        console.log("TEST");
         $rootScope.Save.push(epc.event);
        console.log($rootScope.Save);
    }
    
}])
   
.controller('presenterCtrl', ['$scope', '$stateParams','$firebaseArray', '$rootScope',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $rootScope) {
   /* var pcbio = this;
    var presenter = firebase.database().ref('Presenter');
    //is this the presenter bios or searching presenter?
    pcbio.db = $firebaseArray(presenter);
    */
    var pc = this;
    
    pc.person = $rootScope.Presenters;
    
    

}])
   
.controller('announcementsCtrl', ['$scope', '$stateParams', '$firebaseArray', '$rootScope',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $rootScope) {
        var ac = this;

        $rootScope.messages = firebase.database().ref('message');
        ac.db = $firebaseArray($rootScope.messages);
        console.log(ac.db);
        
       
    
}])
 