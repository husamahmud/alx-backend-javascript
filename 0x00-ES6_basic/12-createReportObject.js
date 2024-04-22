export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    countDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
