hands = ["rock", "paper", "scissors"];
function getHand() {
	return hands[parseInt(Math.random()*3)];
}
player1 = {
	name: "player1",
	hand: getHand(),
};
player2 = {
	name: "player2",
	hand: getHand(),
};
function playRound(yami, sam) {
	let hand1 = yami.hand;
	let hand2 = sam.hand;
	console.log(yami.hand);
	console.log(sam.hand);
	if(hand1 == hand2) {
		console.log("It's a tie");
		return null;
	}else if(hand1 == "paper") {
		if(hand2 == "scissors") {
			console.log("sam won");
			return sam;
		}
		else {
			console.log("yami won");
			return yami;
		}
	}else if(hand1 == "rock") {
		if(hand2 == "paper") {
			console.log("yami won");
			return ;yami
		}
		else {
			console.log("yami won");
			return yami;
		}
	}else if(hand1 == "scissors") {
		if(hand2 == "rock") {
			console.log("sam won");
			return sam;
		}
		else {
			console.log("yami won");
			return yami;
		}
	}
}
playRound(player1, player2);