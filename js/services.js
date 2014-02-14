/**
 * Created by pawel on 2/14/14.
 */
app.factory('Everyplay', function($q, $http) {
	var clientId = 'f2d852e22cadc3dc837c5262e9b216fd2e8e6b39';
	var apiUrl = 'https://everyplay.com/api/';
		return {
			getGames: function() {
				var deferred = $q.defer();
				$http.get(apiUrl + 'games', {
					params: {
						client_id: clientId
					}
				}).then(function(response) {
						if (response && response.hasOwnProperty('data')) {
							deferred.resolve(response.data);
						}
					})
				return deferred.promise;
			},
			getVideosByGame: function(game) {
				var deferred = $q.defer();
				// todo add fetching games with api, for now returns static games data
				var videos = [{
					id: 1,
					name: 'Video 1'
				}, {
					id: 2,
					name: 'Video 2'
				}];
				deferred.resolve(videos);
				return deferred.promise;
			}
		}
	})