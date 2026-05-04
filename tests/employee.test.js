// tests/employee.test.js

const { getEmployeeById, getEmployeesByDepartment } = require("../src/employee");

describe("getEmployeeById", () => {
  // Positive scenarios
  describe("positive scenarios", () => {
    test("returns the correct employee for a valid ID (id: 1)", () => {
      const employee = getEmployeeById(1);
      expect(employee).toEqual({
        id: 1,
        name: "Vinod",
        department: "Engineering",
        salary: 80000,
      });
    });

    test("returns the correct employee for a valid ID (id: 2)", () => {
      const employee = getEmployeeById(2);
      expect(employee).toEqual({
        id: 2,
        name: "Anita",
        department: "HR",
        salary: 50000,
      });
    });

    test("returns the correct employee for a valid ID (id: 3)", () => {
      const employee = getEmployeeById(3);
      expect(employee).toEqual({
        id: 3,
        name: "Rahul",
        department: "Engineering",
        salary: 90000,
      });
    });

    test("returned employee object has all expected properties", () => {
      const employee = getEmployeeById(1);
      expect(employee).toHaveProperty("id");
      expect(employee).toHaveProperty("name");
      expect(employee).toHaveProperty("department");
      expect(employee).toHaveProperty("salary");
    });
  });

  // Negative scenarios
  describe("negative scenarios", () => {
    test("returns undefined for a non-existent ID", () => {
      const employee = getEmployeeById(999);
      expect(employee).toBeUndefined();
    });

    test("returns undefined for ID 0", () => {
      const employee = getEmployeeById(0);
      expect(employee).toBeUndefined();
    });

    test("returns undefined for a negative ID", () => {
      const employee = getEmployeeById(-1);
      expect(employee).toBeUndefined();
    });

    test("returns undefined when ID is a string instead of a number", () => {
      const employee = getEmployeeById("1");
      expect(employee).toBeUndefined();
    });

    test("returns undefined when ID is null", () => {
      const employee = getEmployeeById(null);
      expect(employee).toBeUndefined();
    });

    test("returns undefined when ID is undefined", () => {
      const employee = getEmployeeById(undefined);
      expect(employee).toBeUndefined();
    });
  });
});

describe("getEmployeesByDepartment", () => {
  // Positive scenarios
  describe("positive scenarios", () => {
    test("returns all employees in the Engineering department", () => {
      const result = getEmployeesByDepartment("Engineering");
      expect(result).toHaveLength(2);
      expect(result).toEqual([
        { id: 1, name: "Vinod", department: "Engineering", salary: 80000 },
        { id: 3, name: "Rahul", department: "Engineering", salary: 90000 },
      ]);
    });

    test("returns all employees in the HR department", () => {
      const result = getEmployeesByDepartment("HR");
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        { id: 2, name: "Anita", department: "HR", salary: 50000 },
      ]);
    });

    test("returned employee objects have all expected properties", () => {
      const result = getEmployeesByDepartment("Engineering");
      result.forEach((emp) => {
        expect(emp).toHaveProperty("id");
        expect(emp).toHaveProperty("name");
        expect(emp).toHaveProperty("department");
        expect(emp).toHaveProperty("salary");
      });
    });

    test("all returned employees belong to the requested department", () => {
      const result = getEmployeesByDepartment("Engineering");
      result.forEach((emp) => {
        expect(emp.department).toBe("Engineering");
      });
    });
  });

  // Negative scenarios
  describe("negative scenarios", () => {
    test("returns an empty array for a non-existent department", () => {
      const result = getEmployeesByDepartment("Finance");
      expect(result).toEqual([]);
    });

    test("returns an empty array for an empty string", () => {
      const result = getEmployeesByDepartment("");
      expect(result).toEqual([]);
    });

    test("returns an empty array when department is null", () => {
      const result = getEmployeesByDepartment(null);
      expect(result).toEqual([]);
    });

    test("returns an empty array when department is undefined", () => {
      const result = getEmployeesByDepartment(undefined);
      expect(result).toEqual([]);
    });

    test("is case-sensitive and returns empty array for wrong casing", () => {
      const result = getEmployeesByDepartment("engineering");
      expect(result).toEqual([]);
    });
  });
});
