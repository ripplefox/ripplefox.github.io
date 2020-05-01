var shApp = angular.module('foxhome', ['pascalprecht.translate']);

shApp.config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('cn', translate_cn);
	$translateProvider.translations('en', translate_en);
	$translateProvider.preferredLanguage('cn');
	$translateProvider.useSanitizeValueStrategy('escape');
}]);

shApp.run(['$rootScope', '$window', '$translate',function($rootScope, $window, $translate) {
	let key = $window.localStorage['lang'] || 'cn';
	$translate.use(key);
	$rootScope.lang = $translate.use();
}]);

shApp.factory('SettingFactory', function($window) {
	return {
		setLang : function(lang) {
			$window.localStorage['lang'] = lang;
		},
		getLang : function() {
			return $window.localStorage['lang'] || 'cn';
		}
	};
});
shApp.controller("LangCtrl", [ '$scope', '$rootScope', '$translate', 'SettingFactory',
  function($scope, $rootScope, $translate, SettingFactory) {
  $rootScope.lang = $translate.use();
	$scope.changeLanguage = function (key) {
      $translate.use(key);
      $rootScope.lang = $translate.use();
	    SettingFactory.setLang(key);
	};
}]);



