const getEmployees = () => {
	return fetch("../data/fetech.json")
		.then(response => response.json());
};
