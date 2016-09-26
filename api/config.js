module.exports = {

	giphy: {
		url: 'http://api.giphy.com/v1',
		key: 'dc6zaTOxFJmzC'
	},

	searchGiphy: function (request) {
		request = request || 'funny+cat';
		return this.giphy.url + '/gifs/search?api_key=' + this.giphy.key + '&q=' + request;
	},

	isDev: function () {
		return process.env.NODE_ENV === 'development';
	}
}