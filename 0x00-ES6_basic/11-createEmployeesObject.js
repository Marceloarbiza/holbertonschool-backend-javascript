export default function createEmployeesObject(departmentName, employees) {
  const objEmp = {
    [`${departmentName}`]: employees,
  };
  return objEmp;
}
