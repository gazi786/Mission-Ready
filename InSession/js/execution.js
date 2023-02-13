//Getting container to display the data
let loopPerson = document.querySelector("#loopPerson");
let greetings, situated;

//Data to be looped
const personData = [
	{
		firstName: "Mike",
		lastName: "Ross",
		favourites: ["Pizza", "Ice Cream", "Candy"],
		city: "Sydney",
		country: "Australia",
		continent: "Oceania",
	},
	{
		firstName: "Rachel",
		lastName: "Zane",
		favourites: ["Toast", "Fruits", "Popsicles"],
		city: "Toronto",
		country: "Canada",
		continent: "North America",
	},
	{
		firstName: "Harvey",
		lastName: "Specter",
		favourites: ["Pizza", "Soda", "Candy"],
		city: "Brussels",
		country: "Belgium",
		continent: "Europe",
	},

];
//Object class properties
class LoopPerson {
	constructor(firstName, lastName, favourites) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favourites = favourites;
	}
	greetings() {
		greetings = `Hello  ${this.firstName} ${this.lastName} <br> Your favourites are: ${this.favourites}<br>`;
	}
}

class City {
	constructor(name, country, continent) {
		this.name = name;
		this.country = country;
		this.continent = continent;
	}
	cityBase() {
		situated = `You are located in ${this.name}, ${this.country}. Your country is a part of ${this.continent}.`;
	}
}

//Looping through the data
for (let i = 0; i < personData.length; i++) {
	for (let j = 0; j < personData[i].favourites.length; j++) {
		personData[i].favourites[j] = ' ' + personData[i].favourites[j];
	}
	const user = new LoopPerson(personData[i].firstName, personData[i].lastName, personData[i].favourites);
	const city = new City(personData[i].city, personData[i].country, personData[i].continent);
	user.greetings();
	city.cityBase();
	loopPerson.innerHTML += `<p style="color:skyblue">${greetings}</p><p style="color:turquoise">${situated}</p>`;
}



