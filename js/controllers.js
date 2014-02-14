/**
 * Created by pawel on 1/25/14.
 */
app.controller('Videos', function($scope, Everyplay) {
		//handler for videos

		Everyplay.getGames()
			.then(function(games) {
				$scope.games = games;
			})
		$scope.filterByGame = function(game) {
			alert(game.name);
		}
	})
	.controller('Video', function($scope) {
		//handler for specific video page
	})