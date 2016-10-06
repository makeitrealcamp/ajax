$(document).ready(function(){
	$("#get_color").on("click", function(e){
		var ul = $("ul").children()
		var ranLi = ul[Math.floor(Math.random() * 9)]

		var request = $.ajax({
			method:"post",
			url: "/color"
		})

		request.done(function(response){
			$(ranLi).css({'background-color': response.color})
			console.log($(ranLi))
			debugger
		})
	})

//console.log(ul)
});
