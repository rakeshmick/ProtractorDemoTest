'use strict'
var TownsendHomepage = require('../pages/Townsend.js');
var CreateEmployeePage = require('../pages/createEmployeePage.js');
var editEmployeePage = require('../pages/editEmployeePage.js');
var employee = require('../pages/employeePage.js');
var loginDetails = require('../pages/employeedata.module.js');
var using = require('jasmine-data-provider');

describe("cafetownsend page object",function () {

    var originalTimeout;

    beforeEach(function(done) {
        done();
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
    });

    it("login test", function () {
        TownsendHomepage.get();
        TownsendHomepage.login('Luke', 'Skywalker');
        expect(TownsendHomepage.showErrorMsg.isPresent()).toEqual(false);
    
    });

    it("login and create user", function (done) {
        TownsendHomepage.get();
        TownsendHomepage.setName('Luke');
        //to test if value is set properly
        expect(TownsendHomepage.getName()).toBe('Luke');
        TownsendHomepage.setPassword('Skywalker');
        //to test if value is set properly
        expect(TownsendHomepage.getPassword()).toBe('Skywalker');
        TownsendHomepage.submitForm();
       
        CreateEmployeePage.createEmpoyeeButtonEnter();
        CreateEmployeePage.setFirstName('rock')
        CreateEmployeePage.setlastName('test');
        CreateEmployeePage.setDate('2012-03-05');
        CreateEmployeePage.setEmail("rock@test.com");
        CreateEmployeePage.submitForm();
        var employees= employee.getEmployeeList();
        var filteredList= employee.searchEmployeeFromList(employees,'rock test');
        //verify if the new employee got added
        //we can also have some logic to search if the user was already in the db before adding
        expect(filteredList.count()).toBe(1);  
        done();
    });

 
  it("Update test ", function () {
        TownsendHomepage.get();
        TownsendHomepage.login('Luke', 'Skywalker');
        var employeeToEdit = require('../pages/employeePage.js')
        var employeeList =employeeToEdit.getEmployeeList();
        //there can be more than one entry for the same employee
        var searchedEmployeeEntries = employeeToEdit.searchEmployeeFromList(employeeList,'rock test');     
        employeeToEdit.selectFirstFromFiltered(searchedEmployeeEntries);
        editEmployeePage.editEmployeeButton.click();
        editEmployeePage.editEmployee();     
        //var employees= employee.getEmployeeList();
        expect(employeeToEdit.getSearchedEmployeeListCount('rock testupdated')).toBe(1);
    });
   

    it("Delete test", function () {
        TownsendHomepage.get();
        TownsendHomepage.login('Luke', 'Skywalker');
        var employeeToDelete = require('../pages/employeePage.js')
        var employeeList =employeeToDelete.getEmployeeList();
        //there can be more than one entry for the same employee
        var searchedEmployeeEntries = employeeToDelete.searchEmployeeFromList(employeeList,'rock testupdated');     
        employeeToDelete.selectFirstFromFiltered(searchedEmployeeEntries);
        employeeToDelete.deleteEmployee();
        var employees= employeeToDelete.getEmployeeList();
        expect(employeeToDelete.getSearchedEmployeeList('rock testupdated').first().isPresent()).toBe(false); 
      
        
    });
});

describe("Test with data provider for login ", function () {
        using(loginDetails.loginData, function (data) {
            it("paramatrized login test with data: " +data.user_name, function () {
                TownsendHomepage.get();
                TownsendHomepage.login(data.user_name, data.user_password);
                expect(TownsendHomepage.showErrorMsg.isPresent()).toEqual(false);
                //test fails is error msg is shown 
            });
        }

    );
})