/**
 * Created by pawel on 2/14/14.
 */
var app = angular.module('app', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/videos/:videoId', {
				templateUrl: 'views/video.html',
				controller: 'Video'
			}).otherwise({
				templateUrl: 'views/videos.html',
				controller: 'Videos'
			})
	})