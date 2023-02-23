const itemName = document.getElementById("itemName");
const itemAmount = document.getElementById("itemAmount");
const addButton = document.querySelector("#addButton");
const displayList = document.querySelector("#displayLists");


let loadShoppingLists = () => {
	fetch('listsData.json')
		.then(response => response.json())
		.then(data => {
			const container = document.getElementById('shopping-lists-container');
			data.forEach(list => {
				const shoppingList = new ShoppingList(list.name, list.items);
				container.appendChild(shoppingList.element);
			});
		});
}

class ShoppingList {
	constructor() {
		this.list = document.getElementById("list");
		this.items = [];
		this.addBtn = document.getElementById("addButton");
		this.addBtn.addEventListener("click", this.addItem.bind(this));
	}

	addItem() {
		const item = document.getElementById("item").value;
		if (item !== "") {
			const li = document.createElement("li");
			li.innerText = item;
			const delBtn = document.createElement("button");
			delBtn.innerText = "Delete";
			delBtn.addEventListener("click", () => {
				this.deleteItem(li, item);
			});
			li.appendChild(delBtn);
			this.list.appendChild(li);
			this.items.push(item);
			document.getElementById("item").value = "";
		}
	}

	deleteItem(li, item) {
		this.list.removeChild(li);
		this.items = this.items.filter(i => i !== item);
	}
}

const shoppingList = new ShoppingList();