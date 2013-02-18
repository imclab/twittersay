var topics = require('twitter-trends').topics;
var trends = {};

/**
 * Refresh trending topics every 5 minutes
 */
function cron() {
  topics(1, function(top){
    trends.general = top;

    console.log('======>>>',trends.general,'<<<======');
  })
}
setInterval(cron, 1000 * 60 * 5); cron();

/**
 * Main application route
 */
exports.index = function(req, res){
  res.render('index', {
		title: 'Twitter says',
		roomOptions: JSON.stringify({
			name: JSON.stringify(req.params),

			tag: req.param('tag', false),
			lang: req.param('lang', false),
			country: req.param('country', false),
		}),

		locations: require('locations').countries,
		
		languages: {
			en: 'English',
			fr: 'Français',
			de: 'Deusch',
		},
		
		hashtags: trends.general
		
	});
};
