/**
 * Created by pawel on 2/14/14.
 */
app.factory('Everyplay', function($q) {
		return {
			getGames: function() {
				var deferred = $q.defer();
				// todo add fetching games with api, for now returns static games data
				var games = [{
					id: 10,
					name: 'Game 1'
				},{
					id: 20,
					name: 'Game 2'
				}]
				deferred.resolve(games);
				return deferred.promise;
			}
		}
	})