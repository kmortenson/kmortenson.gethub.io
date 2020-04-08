// quote generator utilises json, Local memory and API request Rubric

function quote() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://type.fit/api/quotes", true);
	xhr.send();

	xhr.addEventListener("readystatechange", processRequest, false);

	function processRequest() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var quote = JSON.parse(xhr.responseText);
			var max = quote.length;
			localStorage.setItem("quote", JSON.stringify(quote));
			localStorage.setItem("max", quote.length);
		}
	}
	getQuote();
}

function getQuote() {
	var notify = JSON.parse(localStorage["quote"]);
	var i = randomNumber();
	document.getElementById("quoteDisplay").innerHTML = "<strong><i>" + notify[i].text + "</strong><br/>~" + notify[i].author + "</>";
}

function randomNumber() {
	var max = localStorage["max"];
	return Math.floor(Math.random() * (max - 0)) + 0;
}

