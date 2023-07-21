// Write your solution in this file!
const employee = {
    name: "Hulk Hogan",
    streetAddress: "369 brother"
    };
    function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
    ...employee,
    [key]: value
    };
    }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    }
    function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    }
    console.log(employee);
    const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
    console.log(updatedEmployee);
    console.log(employee);
    destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager");
    console.log(employee);
    const deletedEmployee = deleteFromEmployeeByKey(employee, "position");
    console.log(deletedEmployee);
    console.log(employee);
    destructivelyDeleteFromEmployeeByKey(employee, "position");
    console.log(employee);