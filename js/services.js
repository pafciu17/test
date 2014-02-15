/**
 * Created by pawel on 2/14/14.
 */
app.factory('Everyplay', function($q, $http) {
		var clientId = 'f2d852e22cadc3dc837c5262e9b216fd2e8e6b39';
		var apiUrl = 'https://everyplay.com/api/';
		var handleResponse = function(deferred, response) {
			if (response && response.hasOwnProperty('data')) {
				deferred.resolve(response.data);
			}
		}
		return {
			getGames: function() {
				var deferred = $q.defer();
				$http.get(apiUrl + 'games', {
					params: {
						client_id: clientId
					}
				}).then(function(response) {
						handleResponse(deferred, response);
					})
				return deferred.promise;
			},
			getVideosByGame: function(game) {
				var deferred = $q.defer();
				var url = apiUrl;
				if (game && game.hasOwnProperty('id')) {
					url += 'users/' + game.profile_id + '/'
				}
				$http.get(url + 'videos', {
					params: {
						order: '-views',
						client_id: clientId
					}
				}).then(function(response) {
						handleResponse(deferred, response);
					})
				return deferred.promise;
			}
		}
	})