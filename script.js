$(document).ready(function() {

	//what does this do?

	//--- The below function takes in a parameter 'value' indicating the number/face value of the card. 
	//--- The if statement contains a switch statement that says that if 'value' is above 10,
	//--- then to return the corresponding string ('Jack', etc.). If 'value' is below 10,
	//--- leave it alone and then at the very end, return the 'value' as a string. (i.e. 9 ---> '9')
    
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
                    return 'Jack';
                    break;
				case 12:
                    return 'Queen';
                    break;
				case 13:
                    return 'King';
                    break;
			}
		}
		return value.toString();
	};

	//what does this do?

	//--- An empty variable called 'deck' wass declared for future data storage. 
	//--- var 'suits' is an array containing the various card suits.
	//--- The top-level 'for' loop looks for the suit of the card, and with every loop,
	//--- the given index of suits is assigned to var 'suit'. It then proceeds to go through 
	//--- another looping process (var j), which looks for the face value of the card. 
	//--- Finally, it pushes a key/value object containing the face value and the suit  
	//--- of the card to var 'deck'. (It is 'j+1' because j starts at 0, but the deck starts at Ace
	//--- which would correlate to 1).
    
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
    
    
	
	//what does this do?

	//--- 'shuffle' is a function that takes in an argument that corresponds with 'array'.
	//--- In the function, 'copy' is an empty array, 'n' is the length of 'array', and
	//--- var 'i' has been declared. WHILE 'n' is true (not 0), 'i' is equal to any random number
	//--- UP TO the length of 'array', which starts at 52. IF 'i' (a random number) remains in
	//--- 'array' (the first pile of cards), push array[i] into 'copy', then delete array[i] 
	//--- (because in the game of War, you're taking a card out of your original pile {'array'} and putting
	//--- it into another {'copy'}). Finally, decrement 'n' to make array.length smaller by one each time.
	//--- Finally, return the 'copy' array when 'shuffle' is called.
	
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { 
			i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 	    copy.push(array[i]);
		 	    delete array[i];
		 	    n--;
		 	} 
		} 
		return copy; 
	};
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable

	deck = shuffle(deck);
	// console.log(deck);
    
    
	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evenly divide the deck up between the two players
	
	var deal = function() {
		for (var i = 0; i < deck.length; i++) {
			if (i % 2 === 0) {
				cards_player_1.push(deck[i]);
			}
			else {
				cards_player_2.push(deck[i]);
			}	
		}
	};
	deal();
	// console.log(cards_player_1);
	// console.log(cards_player_2);
    
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	


	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	};
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		
		//this function (defined below) will continue to the next turn
		advance();
	};
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
    
});