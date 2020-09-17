var Module = (function () {


	function _map(list){
		return mapList = list.map(function(cinemaFunction){
			return {
				name:cinemaFunction.movie.name,
				genero:cinemaFunction.movie.genre,
				hora:cinemaFunction.date.split(" ")[1]
			}
		})
	};
	function _table(cinemaFunctions){
		functions = _map(cinemaFunctions);
		$("#table_cinema > tbody").empty();
		functions.map(function(f){
			$("#table_cinema > tbody").append(
				"<tr>" +
					"<td>" + f.name + "</td>"+
					"<td>" + f.genero + "</td>"+
					"<td>" + f.hora + "</td>"+
				"</tr>"
			);
		});
	};

	function getCinemaFunctions(){
		cinemaName = $("#name_input").val();
		cinemaDate = $("#date_input").val();
		$("#cinema_name").text("Cinema name : "+ cinemaName);
		apimock.getFunctionsByCinemaAndDate(cinemaName,cinemaDate,_table)
	};

	return {
		getCinemaFunctions: getCinemaFunctions
	};
})();