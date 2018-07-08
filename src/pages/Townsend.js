'use strict';
var TownsendhomePage = function(){
        var nameInput = element(by.model('user.name'));
        var passwordInput = element(by.model('user.password'));
        var submitButton = element(by.css('button.main-button'));
        this.logOutButton = element(by.css('[ng-click="logout()"]'));
        this.greetings=element(by.css('#greetings.ng-binding'));
        this.showErrorMsg=element(by.css('[ng-show="showMessage()"]'));
        this.get = function () {
            browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
            browser.driver.manage().window().maximize();
        };
        this.setName = function (name) {
            nameInput.sendKeys(name);
        };
        this.setPassword = function (password) {
            passwordInput.sendKeys(password);
        }
        this.submitForm = function () {
            submitButton.click();
        }
        this.getName = function () {
            return nameInput.getAttribute('value');
        };
        this.getPassword = function () {
            return passwordInput.getAttribute('value');
        };

        this.login = function(name,password) {
            this.setName(name);
            this.setPassword(password);
            this.submitForm();
            browser.waitForAngular();
        }
        this.logOut =function name(params) {
            logOutButton.click();
        }
    }
module.exports = new TownsendhomePage();