/**
 * Created by pawel on 1/25/14.
 */
app.config(function($sceDelegateProvider) {
		//enables loading resources from listed hostnames
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://everyplay.com/*',
			'http://static.everyplay.com/**'
		]);
	})
	.controller('Videos', function($scope, Everyplay) {
		//handler for videos
		loadVideosByGame = function(game) {
			Everyplay.getVideosByGame(game)
				.then(function(videos) {
					$scope.videos = videos;
				})
		}
		if (!$scope.videos) {
			loadVideosByGame();
		}

		Everyplay.getGames()
			.then(function(games) {
				$scope.games = games;
			})
		$scope.filterByGame = function(game) {
			loadVideosByGame(game);
		}

	})
	.controller('Video', function($scope, $routeParams, Everyplay) {
		//handler for specific video page
		Everyplay.getVideo($routeParams.videoId)
			.then(function(video) {
				video.uploaded = (new Date(video.created_at)).getTime();
				video.play_src_mp4 = video.base_url + video.video_files.medium;
				video.play_src_hsl = video.base_url + video.video_files.hls;
				video.play_thumbnail = video.base_url + video.thumbnail_files.high;
				$scope.video = video;
			})
	})