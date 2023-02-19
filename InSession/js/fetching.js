const displayEmployees = document.getElementById("displayEmployees");

const getEmployees = () => {
	return fetch("../InSession/data/fetch.json")
		.then(response => response.json())
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch(error => console.log(error));
};

let displayEmployee = () => {
	getEmployees()
		.then(employeesData => {
			if (employeesData && employeesData.employees) {
				employeesData.employees.forEach((employee) => {
					displayEmployees.innerHTML += `	
            <div class="col-md-4 col-sm-6 text-center">
			  <img src="${employee.image}" alt="${employee.firstname} ${employee.lastname}" class="img-fluid rounded-circle w-50 mb-3">
              <h2 style="color:#FF5733;">${employee.firstname} ${employee.lastname}</h2><em style="font-size: 12px; color: aqua;">${employee.age} years young</em>
			  <h5>${employee.title}</h5>
			  <p class="">Email: <em>${employee.email}</em></p>
              <p class="">Department: <em>${employee.department}</em></p>

            </div>
          `;
				});
			}
		})
		.catch(error => console.log(error));
};

displayEmployee();
