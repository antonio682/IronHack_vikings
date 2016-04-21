var Viking = function (name){
	this.name = name;
	this.strength = 3;
	this.health = 100;
}

Viking.prototype.attack = function(){
	var randomNumber = Math.floor(Math.random()*6);

	switch(this.strength){
		case 1:
			if (randomNumber % 2 == 0){
		 		return 200;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 2:
			if (randomNumber % 2 == 0){
		 		return 250;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 3:
			if (randomNumber % 2 == 0){
		 		return 300;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 4:
			if (randomNumber % 2 == 0){
		 		return 350;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		default:
			return 0;
			break;
	}
}

Viking.prototype.damage = function(dam){
	if(dam == 0){
		console.log("Attack failed!!!!");
		console.log("Name: " + this.name + " Remaining Health: " + this.health);
	} else {
		this.health -= dam;
		console.log("Ouchhhhhh!!!!!!!");
		console.log("Name: " + this.name + " Remaining Health: " + this.health);
	}
}
module.exports = Viking;
//var viking1 = new Viking("Erik");
//console.log(viking1);
//console.log(viking1.attack());