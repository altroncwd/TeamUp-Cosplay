var project = function (projectName, projectOwner, eventDeadline, eventDeadlineDate, date) {
  this.projectName = projectName;
  this.projectOwner = projectOwner;
  this.projectMembers = {};
  this.eventDeadline = eventDeadline;
  this.eventDeadlineDate = eventDeadlineDate;
  this.projectCreated = date;
  this.costumes = [];
  this.lastLoggedIn = undefined;
};

// simply generates and returns a 10 diget key
var randomKey = function (){
  var key = '';
  var collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(var i = 0; i < 10; i++){
    var random = Math.floor(Math.random()*12);
    if (random >9) {
      key += collection[ Math.floor(Math.random()*collection.length)];
    } else {
      key += random;
    }
  }
  return key;
}

var member = function (){
  this[randomKey()] = undefined;
}


{ projectName : _____ ,
  projectOwner : ___ Original Creator ___ ,
  projectMembers : {  242j52sf3 : “__John__”,
				23j325hk : “__Epic Grandure__” ,
				353k3j5l3 : null
			 	},
eventDeadline : “ ___AX___”,
eventDeadlineDate : “__7/1/16__ “,   // do i want to store a string for this
projectCreated :  “__ 4/19/2016__”,
lastLoginDate : “________”,   // this will keep track of when users login to view the project, this will be used for clearing 						out projects later on
costumes : [
	{ character : “Guren”,
	  refrenceImages : [ ],
	  partsOfCostume : [
		{ parts : “Jacket”,
		 	 materialOptions : [  { image : _______ ,
			  				cost : “__15__” ,
							fabric :  __true__ ,  // boo lien value
							location : “__ Britex__” ,
			  				weight : “ __Medium__” ,
			  				sku : “__23423jkldgj2l3gj__”,
			  				link : “__http://spandexworld.com/vinyl__”
							}
		 	 ],
			partsImageRefrences :  [ // No Idea how this one will/should work
							       // Should I store new images or can i mage reference to the original image with 								additional information to “zoom” in
			]
	  ],
	},
fullProjectProgress : ____________ ,
}
