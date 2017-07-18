function bookSearch() {
	// Create variable to store input value in search
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	// Initiage ajax call
	$.ajax({
		// Here's the URL to use plus the results of the input variable as the query info
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		// Here's the type of data file returned
		dataType: "json",

		success: function(data){
			// Console log data to see properties available
			console.log(data)

			// Loop through returned data to display info
			for(i = 0; i < data.items.length; i++) {

				// Create new div, h2, h3 & img elements
				var results = document.getElementById("results")
				var newDiv = document.createElement("div")
				var newImg = document.createElement("img")
				var newAuthor = document.createElement("p")
				var newTitle = document.createElement("h2")

				// Create any classes needed and attach to elements
				newDiv.className = "col-md-4 results"

				// Create text nodes for each element using data pull
				var newAuthorText = document.createTextNode(data.items[i].volumeInfo.authors)
				var newTitleText = document.createTextNode(data.items[i].volumeInfo.title)

				// Append textNodes to elements
				newAuthor.appendChild(newAuthorText)
				newTitle.appendChild(newTitleText)

				// Add src attribute to img element
				newImg.setAttribute("src", data.items[i].volumeInfo.imageLinks.thumbnail)

				// Append created h2, h3 & img elements to div element
				newDiv.appendChild(newImg)
				newDiv.appendChild(newAuthor)
				newDiv.appendChild(newTitle)

				// Append created div element(s) to listing div 
				results.appendChild(newDiv)

			}
		},

		// Here's the type of server request (it gets the data)
		type: "GET"
	});
}	
// Alternative method for calling bookSearch function if onclick attribute were removed from button element on index file
// document.getElementById("button").addEventListener("click", bookSearch, false)