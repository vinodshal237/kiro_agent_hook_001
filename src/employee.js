// employee.js

const employees = [
  { id: 1, name: "Vinod", department: "Engineering", salary: 80000 },
  { id: 2, name: "Anita", department: "HR", salary: 50000 },
  { id: 3, name: "Rahul", department: "Engineering", salary: 90000 },
];

// Get employee details by ID
function getEmployeeById(id) {
  return employees.find(emp => emp.id === id);
}

// Get employees by department
function getEmployeesByDepartment(dept) {
  return employees.filter(emp => emp.department === dept);
}

module.exports = {
  getEmployeeById, 
  getEmployeesByDepartment,
};