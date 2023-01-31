let counterContainer = document.querySelector(".website-counter");
let resetButton = document.querySelector("#reset");
let visitCount = localStorage.getItem("page_view");
let refreshButton = document.querySelector("#refresh");

// Check if page_view entry is present
if (visitCount) {
	visitCount = Number(visitCount) + 1;
	localStorage.setItem("page_view", visitCount);
} else {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
	counterContainer.innerHTML = visitCount;
});

//Refresh Page
refreshButton.addEventListener("click", () => {
	location.reload();
});
