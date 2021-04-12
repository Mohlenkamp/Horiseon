// Not really an error, but there's no comments on any of the functions
// So, it's much less readable

//When the factButton is clicked
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactsArray)
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

// Error 9: Array elements not separated because quotation marks are missing
// This array holds all of our Boo facts!
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	//Error 10: color pink is not in quotes
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked... 
//Error 11: click not in quotes
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
//Error 12: click not in quotes
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})