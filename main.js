$("input").keyup(function() {
	var value = $("input").val();
	if (value.length > 2) {
		$.ajax({
			method: "GET",
			url: "https://itunes.apple.com/search",
			dataType: "json",
			data: {term: value},
			success: function(response) {
				var songs = response.results;
				var list = "";
				songs.forEach(function(song) {
					list += `<p>${song.artistName} - ${song.trackName}</p>`;
				})
				$("#results").html(list);
			}
		});
	} else if (value.length > 0) {
		$("#results").html("");
	}
});