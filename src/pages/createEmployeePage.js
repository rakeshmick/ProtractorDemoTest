'use strict'
var createEmployeePage =function() {
    this.createEmpoyeeButton =  element(by.css('a#bAdd'));
    this.firstName = element(by.model('selectedEmployee.firstName'));
    this.lastName =element(by.model('selectedEmployee.lastName'));
    this.startDate = element(by.model('selectedEmployee.startDate'));
    this.emailField =element(by.model('selectedEmployee.email'));
    this.submitButton = element(by.css('.formFooter [ng-show="isCreateForm"]'));
    this.employeeListLocator= by.repeater('employee in employees');
    this.setFirstName= function (name) {
        this.firstName.sendKeys(name);
    }
    this.setlastName= function (name) {
        this.lastName.sendKeys(name);
    }
    this.setDate= function (date) {
        this.startDate.sendKeys(date);
    }
    this.setEmail = function (email) {
        this.emailField.sendKeys(email)
    }
    this.createEmpoyeeButtonEnter = function () {
        this.createEmpoyeeButton.click();
    }
    this.submitForm = function () {
        this.submitButton.click();
    }
    this.getEmployeeList= function () {
        return element.all( this.employeeListLocator );
    }

    this.searchEmployeeFromList = function (elements,employeeName) {
        
       var filtered= elements.filter(function(elem, index) {
        return elem.getText().then(function(text) {
          return text === employeeName;
        });
      });

      return filtered;
    }

   
}

module.exports = new createEmployeePage();