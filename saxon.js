var Saxon = function(){
	this.strength = Math.floor(Math.random()*5);
	this.health = Math.floor(Math.random()*50);  
}

Saxon.prototype.attack = function(){
	var randomNumber = Math.floor(Math.random()*6);

	switch(this.strength){
		case 1:
			if (randomNumber % 2 == 0){
		 		return 5;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 2:
			if (randomNumber % 2 == 0){
		 		return 10;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 3:
			if (randomNumber % 2 == 0){
		 		return 15;
		 		break;
		    } else {
		    	return 0;
		    	break;
		    }
		case 4:
			if (randomNumber % 2 == 0){
		 		return 20;
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
Saxon.prototype.damage = function(dam){
	if(dam == 0){
		console.log("Attack failed!!!!");
		console.log("Saxon Remaining Health: " + this.health);
	} else {
		this.health -= dam;
		console.log("Ouchhhhhh!!!!!!!");
		console.log("Saxon Remaining Health: " + this.health);
	}
}

module.exports = Saxon;

saxon =  new Saxon();
console.log(saxon.attack());