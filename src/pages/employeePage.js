var employee = function () {
    this.employeesListLocator = by.repeater('employee in employees');
    this.deleteButton =  element(by.id('bDelete'));
    this.getEmployeeList= function () {
    
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