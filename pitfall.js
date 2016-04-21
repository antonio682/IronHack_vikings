var Viking = require('./viking.js');
var Saxon = require('./saxon.js');
var Pitfall = function(){
	
}

Pitfall.prototype.train = function(player1, player2){

	for(var i = 0; i < 5; i++){

		if(player1.health > 35){
			console.log(player1.name + " Attacks-------->");
			var attack_value = player1.attack();
			player2.damage(attack_value);
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
			console.log(player2.name + " Attacks-------->");
			var attack_value = player2.attack();
			player1.damage(attack_value);
			console.log("----------------------------------");
			console.log("----------------------------------");
		} else {
			console.log("Round: "+ i +" You are too much weak to keep training");
			break;
		}
	}
}

Pitfall.prototype.assault = function(vikings, saxons){
	for(var i = 0; i < 5; i++){
		console.log("Arrooooooooo!!!!!");
	}
	console.log("LET'SSSS GOOOOOOO!!!!!!!");
	console.log("------------------------------");
	var number_of_turns = Math.floor(Math.random() * ((8-5)+1) + 5);

	do {
		console.log("------------------------------------------------------");
		var viking_number = Math.floor(Math.random()* vikings.length);
		var saxon_number = Math.floor(Math.random()* saxons.length);
		var v_who_attacks = vikings[viking_number];
		var s_who_defends = saxons[saxon_number];
		console.log(v_who_attacks.name + " Attacks-------->");
		var attack_value = v_who_attacks.attack();
		 s_who_defends.damage(attack_value);

		 if(s_who_defends.health <= 0){
		 	// removes 1 element from index saxon_number
				saxons.splice([saxon_number], 1);
				console.log("Saxon Dead!!!!!!!!!!!");
		 }
		 console.log("///////////////////////////////////")
		 var saxon_number2 = Math.floor(Math.random()* saxons.length);
		 var viking_number2 = Math.floor(Math.random()* vikings.length);
		 var s_who_attacks = saxons[saxon_number2];
		 var v_who_defends = vikings[viking_number2];
		 console.log("Saxon  Attacks-------->");
		 var attack_value = s_who_attacks.attack();
		 v_who_defends.damage(attack_value);

		 if(v_who_defends.health <= 0){
		 	// removes 1 element from index viking_number
				vikings.splice([viking_number2], 1);
				console.log( v_who_defends.name + " Dead!!!!!!!!!!!");
		 }
		 console.log("------------------------------------------------------");
		number_of_turns -= 1 ;
		console.log("Saxons alive: " + saxons.length + " Vikings Alive: " + vikings.length + " Turns to left: " + number_of_turns);
	}while((number_of_turns > 0 ) && (saxons.length > 1 ) && (vikings.length > 1) );
}
/*training */
//player1 = new Viking("Erik");
//player2 = new Viking("Heimdall");
//arena = new Pitfall();
//arena.train(player1, player2);

/*assault*/
vikings_array = [new Viking("Erik"), new Viking("Bjorn"), new Viking("Lars")];
saxons_array = [new Saxon(), new Saxon(),new Saxon(),new Saxon(),new Saxon(),];
arena = new Pitfall();
arena.assault(vikings_array, saxons_array);

