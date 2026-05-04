# Employee Module

## Test Results

Last run: 19 passed, 0 failed — 1 test suite

### `getEmployeeById`

#### Positive Scenarios

| Test | Status |
|------|--------|
| returns the correct employee for a valid ID (id: 1) | ✅ Pass |
| returns the correct employee for a valid ID (id: 2) | ✅ Pass |
| returns the correct employee for a valid ID (id: 3) | ✅ Pass |
| returned employee object has all expected properties | ✅ Pass |

#### Negative Scenarios

| Test | Status |
|------|--------|
| returns undefined for a non-existent ID | ✅ Pass |
| returns undefined for ID 0 | ✅ Pass |
| returns undefined for a negative ID | ✅ Pass |
| returns undefined when ID is a string instead of a number | ✅ Pass |
| returns undefined when ID is null | ✅ Pass |
| returns undefined when ID is undefined | ✅ Pass |

---

### `getEmployeesByDepartment`

#### Positive Scenarios

| Test | Status |
|------|--------|
| returns all employees in the Engineering department | ✅ Pass |
| returns all employees in the HR department | ✅ Pass |
| returned employee objects have all expected properties | ✅ Pass |
| all returned employees belong to the requested department | ✅ Pass |

#### Negative Scenarios

| Test | Status |
|------|--------|
| returns an empty array for a non-existent department | ✅ Pass |
| returns an empty array for an empty string | ✅ Pass |
| returns an empty array when department is null | ✅ Pass |
| returns an empty array when department is undefined | ✅ Pass |
| is case-sensitive and returns empty array for wrong casing | ✅ Pass |
