$(document).ready(function() {
	// hide results template and error alerts on initial page load
	console.log('script.js loaded')
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	console.log('calculate button clicked')

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values
			var plasticInput = document.getElementById("plastic").value;
			
			// set variables for calculating each component score
			var plasticScore = "";

			if (plasticInput === 0 || plasticInput === "undefined") {
				plasticInput = 0;
			} else {
				energy = plasticInput * 1.4; //MJ
				water = plasticInput * 1.053 //kg
				co2 = plasticInput *0.03 //kg

			}
			console.log(energy, water, co2);

			// calculate total score and round to nearest whole integer
			totalScore = Math.round(plasticScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			//document.getElementById("score").innerHTML = formattedScore;
			document.getElementById("energy").innerHTML = (Math.round(energy * 100) / 100).toLocaleString("en");
			document.getElementById("water").innerHTML = (Math.round(water * 100) / 100).toLocaleString("en");
			document.getElementById("co2").innerHTML = (Math.round(co2 * 100) / 100).toLocaleString("en");

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}
	calculateAndDisplayScore();
	});	
});