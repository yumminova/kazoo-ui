window.translate = [];
// Set your language value here
var language = 'ru';

if (language == 'auto'){
	language = navigator.language;
}

window.language = language;

$LAB.script('config/lang/en.js')
	.script('whapps/auth/auth/lang/en.js')
	.script('whapps/voip/voip/lang/en.js')

if(language !== 'en') {
	$LAB.script('config/lang/' + window.language + '.js')
		.script('whapps/auth/auth/lang/' + window.language + '.js')
		.script('whapps/voip/voip/lang/' + window.language + '.js')
}

$LAB.script('config/config.js')
	.wait()
	.script('config/loadFavicon.js');
