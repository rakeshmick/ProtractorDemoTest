var editEmployeePage = function () {
    this.editEmployeeButton = element(by.css('[ng-click="editEmployee()"]'));
    this.firstName = element(by.model('selectedEmployee.firstName'));
    this.lastName =element(by.model('selectedEmployee.lastName'));
    var updateButton =element(by.css(".formFooter button.main-button"));
    this.editEmployee= function (lastName) {
        browser.waitForAngular();
        this.lastName.sendKeys('updated');
        updateButton.click();
    }
}
module.exports = new editEmployeePage();