// script.js 
function primenumber(num) { 
	if (num <= 1) { 
		return false; 
	} 
	for ( 
		let i = 2; 
		i <= Math.sqrt(num); i++ 
	) { 
		if (num % i === 0) { 
			return false; 
		} 
	} 
	return true; 
} 

document 
	.getElementById("bt2") 
	.addEventListener("click", 
		function () { 
			let num = 
				document.getElementById("input").value; 
			let result = primenumber(num); 

			if (result) { 
				document.getElementById("dom-msg").innerHTML = 
					num + " is a prime number."; 
			} else { 
				document.getElementById("dom-msg").innerHTML = 
					num + " is not a prime number."; 
			} 
		} 
	); 
document.getElementById("bt1") 
	.addEventListener("click", () => { 
		document.getElementById("input").value = ""; 
		document.getElementById("dom-msg").innerHTML = "Result"; 
	})
