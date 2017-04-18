function bookSearch() {
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data){
			for(i = 0; i < data.items.length; i++) {
				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "<h2>"
				results.innerHTML += "<h3>" + data.items[i].volumeInfo.authors + "<h3>"
				results.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail + ">"
			}
		},

		type: "GET"
	});
}	

document.getElementById("button").addEventListener("click", bookSearch, false)