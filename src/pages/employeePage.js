var employee = function () {
    this.employeesListLocator = by.repeater('employee in employees');
    this.deleteButton =  element(by.id('bDelete'));
    var ECAll = require('protractor-expected-conditions-for-all-elements');

    this.getEmployeeList= function () {
       browser.wait(ECAll.presenceOfAll(element.all( this.employeesListLocator )), 30000); 
       return element.all( this.employeesListLocator );
     } 
    this.searchEmployeeFromList = function (employeeList,employeeName) {
      var filtered= employeeList.filter(function(elem, index) {
       return elem.getText().then(function(text) {
         return text === employeeName;
       });
     });
     return filtered;
    }
    this.searchToConfirmAbsence = function (employeeList,employeeName) {
      var state =0;
      console.log("type of list "+employeeList.typeOf)
     employeeList.array.forEach(element => {
        if(elem.getText()== employeeName)
        {state=1;}
      })
     return state ? true:false;
    }

    this.getSearchedEmployeeListCount = function (employeeName) {
      return this.searchEmployeeFromList(this.getEmployeeList(this.employeesListLocator),employeeName).count();
    }
    this.getSearchedEmployeeList = function (employeeName) {
      return this.searchEmployeeFromList(this.getEmployeeList(this.employeesListLocator),employeeName);
    }
   this.selectFirstFromFiltered= function (employeeList) {
     employeeList.first().click();
   
   }
   this.deleteEmployee =function () {
      this.deleteButton.click();
      browser.switchTo().alert().accept();
      browser.waitForAngular();
    }
      
    
}

module.exports = new employee();