 fetch('data.json')
 .then(response => response.json())
 .then(data => {

   const employees = data.employees;

   const ul = document.getElementById('employee-list');

   employees.forEach(employee => {

     const div = document.createElement('div');
     div.textContent = `${employee.id} ${employee.header}`;
     ul.appendChild(div);
   });
 })
 .catch(error => console.error('Error fetching JSON: ', error));