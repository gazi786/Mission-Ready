const displayEmployees = document.getElementById("displayEmployees");
const superUsers = document.getElementById("superUsers");

const city = document.getElementById("getCity");
const searchBtn = document.querySelector("#weatherBtn");
const weatherDisplay = document.querySelector("#displayWeather");


const getEmployees = () => {
	return fetch("../InSession/data/fetch.json")
		.then(response => response.json())
		.then((data) => {
			return data;
		})
		.catch(error => console.log(error));
};

const getSuperUsers = () => {
	return fetch("https://reqres.in/api/users/")
		.then(response => response.json())
		.then((userData) => {
			return userData;
		});
};

const fetchWeather = () => {
	let myCity = city.value;
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`)
		.then(response => response.json())
		.then((weatherData) => {
			console.log(weatherData);
			return weatherData;
		});
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

let displaySuperUsers = () => {
	getSuperUsers()
		.then(superUsersData => {
			if (superUsersData && superUsersData.data) {
				superUsersData.data.forEach((superUser) => {
					superUsers.innerHTML += `	
			<div class="col-md-4 col-sm-6 text-center">
			  <img src="${superUser.avatar}" alt="${superUser.first_name} ${superUser.last_name}" class="img-fluid rounded-circle w-50 mb-3">
			  <h2 style="color:#FF5733;">${superUser.first_name} ${superUser.last_name}</h2><em style="font-size: 12px; color: aqua;">UserID: ${superUser.id}</em>
			  <h5>${superUser.email}</h5>
			</div>
		  `;
				});
			}
		})
		.catch(error => console.log(error));
};

let displayWeather = () => {
	fetchWeather()
		.then(weatherData => {
			weatherDisplay.innerHTML += `	
			<div class="col-md-12 text-center">
			  <h2 style="color:#FF5733;">${weatherData.name}</h2><em style="font-size: 12px; color: aqua;">${weatherData.sys.country}</em>
			  <p>The temperature is: ${weatherData.main.temp} &#176;C, but feels like ${weatherData.main.feels_like}&#176;C</p>
			  <p>Humidity is at: ${weatherData.main.humidity}%</p></div>`;
			weatherData.weather.forEach((weather) => {
				weatherDisplay.innerHTML += `
				<div class="col-md-12 text-center"><p>Weather looks like: ${weather.main} in the horizon. It's ${weather.description}</p></div>`;
			});
			weatherDisplay.innerHTML += `
				<div class="col-md-12 text-center"><p>The wind is blowing at: ${weatherData.wind.speed} kM/h... Will it blow you away...???</p>
			</div>`;
		})
		.catch(error => console.log(error));
};

//displayEmployee();
//displaySuperUsers();


searchBtn.addEventListener("click", () => {
	displayWeather();
});




