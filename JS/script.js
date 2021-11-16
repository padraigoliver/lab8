function play(clicked_id){
	var userPick = clicked_id;	
	var compPick = pick();
	var result = compare(userPick,compPick);
	document.getElementById("demo").innerHTML="You chose "+userPick+". The computer chose "+compPick+". "+result;
}

function pick(){
	var compPick = Math.random();
	if(compPick<0.34){
		compPick="rock";
	}
	else if(compPick<0.67){ 
		compPick="paper";
	}
	else{
		compPick="scissors";
	}
	return compPick;
}

function compare(userPick,compPick){
	var result="You lose!";
	if(userPick==compPick){
		result="You draw!";
	}
	else if((userPick=="rock" && compPick=="scissors") || (userPick=="paper" && compPick=="rock") || (userPick=="scissors" && compPick=="paper")){
		result="You win!";
	}
	return result;
}
