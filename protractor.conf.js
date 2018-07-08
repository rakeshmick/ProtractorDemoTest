exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	allScriptsTimeout: 30000,
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function() {}
	},
	capabilities: {
		browserName: 'chrome'
	},
	params: {
		baseUrl: 'http://cafetownsend-angular-rails.herokuapp.com/login'
	},
	specs: ['./src/test/login_update_delete_spec.js'],
	
	framework: 'jasmine',

	onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({

        spec:{
      	displayStacktrace: false}
      }));
   }
};