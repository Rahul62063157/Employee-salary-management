document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/employees')
        .then(response => response.json())
        .then(data => {
            displayEmployees(data);
            calculateTotalSalary(data);
        })
        .catch(error => console.error('Error fetching employee data:', error));
});

function displayEmployees(employees) {
    const employeeList = document.getElementById('employee-list');
    employees.forEach(emp => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';

        const employeeId = document.createElement('div');
        employeeId.className = 'employee-id';
        employeeId.textContent = `ID: ${emp.id}`;

        const employeeName = document.createElement('div');
        employeeName.className = 'employee-name';
        employeeName.textContent = `Name: ${emp.name}`;

        const employeeSalary = document.createElement('div');
        employeeSalary.className = 'employee-salary';
        employeeSalary.textContent = `Salary: $${emp.salary}`;

        const employeeAddress = document.createElement('div');
        employeeAddress.className = 'employee-address';
        employeeAddress.textContent = `Address: $${emp.address}`;

        employeeDiv.appendChild(employeeId);
        employeeDiv.appendChild(employeeName);
        employeeDiv.appendChild(employeeSalary);
        employeeDiv.appendChild(employeeAddress);
        employeeList.appendChild(employeeDiv);
    });
}

function calculateTotalSalary(employees) {
    const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
    document.getElementById('total-salary').innerText = `Total Salary: $${totalSalary}`;
}
