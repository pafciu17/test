/**
 * Created by pawel on 1/25/14.
 */
app.controller('Videos', function($scope, Everyplay) {
		//handler for videos
		loadVideosByGame = function(game) {
			Everyplay.getVideosByGame(game)
				.then(function(videos) {
					$scope.videos = videos;
				})
		}
		loadVideosByGame();

		Everyplay.getGames()
			.then(function(games) {
				$scope.games = games;
			})
		$scope.filterByGame = function(game) {
			loadVideosByGame(game);
		}

	})
	.controller('Video', function($scope) {
		//handler for specific video page
	})