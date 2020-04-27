var shApp = angular.module('foxhome', ['pascalprecht.translate']);

shApp.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('cn', translate_cn);
	$translateProvider.translations('en', translate_en);
	//$translateProvider.translations('jp', translate_jp);
	//$translateProvider.translations('ko', translate_ko);
	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('escape');
}]);

shApp.run(['$rootScope', '$window', '$translate',function($rootScope, $window, $translate) {
	let key = $window.localStorage['lang'] || 'en';
	$translate.use(key);
}]);

shApp.factory('SettingFactory', function($window) {
	return {
		setLang : function(lang) {
			$window.localStorage['lang'] = lang;
		},
		getLang : function() {
			return $window.localStorage['lang'] || 'en';
		}
	};
});
shApp.controller("LangCtrl", [ '$scope', '$translate', 'SettingFactory',
  function($scope, $translate, SettingFactory) {
	$scope.changeLanguage = function (key) {

        $translate.use(key);
	    SettingFactory.setLang(key);
	};
}]);



