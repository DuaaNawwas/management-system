function Employee(id, name, department, level, image) {
	(this.employeeID = id),
		(this.fullName = name),
		(this.department = department),
		(this.level = level),
		(this.image = image),
		(this.salary = salaryCalc(level));
	function salaryCalc(level) {
		switch (level) {
			case "Junior":
				return Math.floor(Math.random() * 501) + 500;
			// Math.floor(Math.random() * (max - min + 1) ) + min;

			case "Mid-Senior":
				return Math.floor(Math.random() * 501) + 1000;

			case "Senior":
				return Math.floor(Math.random() * 501) + 1500;
		}
	}
}

// input new employees from form, add new cards for them and add them to the local storage

let form = document.getElementById("form");
let allEmployees = [];

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let employeeId = document.getElementById("id").value;
	let fullName = document.getElementById("name").value;
	let department = document.getElementById("department").value;
	let level = document.getElementById("level").value;
	let image = document.getElementById("image").value;
	let newEmployee = new Employee(
		employeeId,
		fullName,
		department,
		level,
		image
	);

	allEmployees.push(newEmployee);
	saveToLocal();
	addCard(newEmployee);
	// localStorage.setItem("employees", JSON.stringify(allEmployees));
	// let nnn = JSON.parse(localStorage.getItem("employees"));
	// console.log(nnn[0].fullName);
	// console.log(newEmployee);

	document.forms[0].reset();
});

let cardContainer = document.getElementById("card-container");

function addCard(newEmployee) {
	let card = document.createElement("div");
	cardContainer.append(card);

	let img = document.createElement("img");
	img.setAttribute("src", newEmployee.image);
	card.append(img);

	let cardText = document.createElement("div");
	card.append(cardText);

	let nameH2 = document.createElement("h2");
	nameH2.textContent = newEmployee.fullName;
	cardText.append(nameH2);

	let p = document.createElement("p");
	p.textContent = "Id: " + newEmployee.employeeID;
	cardText.append(p);

	let p2 = document.createElement("p");
	p2.textContent = "Department: " + newEmployee.department;
	cardText.append(p2);

	let p3 = document.createElement("p");
	p3.textContent = "Level: " + newEmployee.level;
	cardText.append(p3);

	let p4 = document.createElement("p");
	p4.textContent = "Salary: " + newEmployee.salary + " JOD";
	cardText.append(p4);
}

// old employees information -- added as cards and in local storage

let employee0 = new Employee(
	1000,
	"Ghazi Samer",
	"Administration",
	"Senior",
	"https://randomuser.me/api/portraits/men/20.jpg"
);
let employee1 = new Employee(
	1001,
	"Lana Ali",
	"Finance",
	"Senior",
	"https://randomuser.me/api/portraits/women/14.jpg"
);
let employee2 = new Employee(
	1002,
	"Tamara Ayoub",
	"Marketing",
	"Senior",
	"https://randomuser.me/api/portraits/women/12.jpg"
);
let employee3 = new Employee(
	1003,
	"Safi Walid",
	"Administration",
	"Mid-Senior",
	"https://randomuser.me/api/portraits/men/14.jpg"
);
let employee4 = new Employee(
	1004,
	"Omar Zaid",
	"Development",
	"Senior",
	"https://randomuser.me/api/portraits/men/5.jpg"
);
let employee5 = new Employee(
	1005,
	"Rana Saleh",
	"Development",
	"Junior",
	"https://randomuser.me/api/portraits/women/8.jpg"
);
let employee6 = new Employee(
	1006,
	"Hadi Ahmad",
	"Finance",
	"Mid-Senior",
	"https://randomuser.me/api/portraits/men/9.jpg"
);

let oldEmployees = [
	employee0,
	employee1,
	employee2,
	employee3,
	employee4,
	employee5,
	employee6,
];

for (let i = 0; i < oldEmployees.length; i++) {
	addCard(oldEmployees[i]);
	// allEmployees.push(oldEmployees[i]);
	// localStorage.setItem("employees", JSON.stringify(allEmployees));
}

function saveToLocal() {
	let strArr = JSON.stringify(allEmployees);
	localStorage.setItem("employees", strArr);
}

function getFromLocal() {
	let jsonArr = localStorage.getItem("employees");
	let arr = JSON.parse(jsonArr);
	allEmployees = arr;
	arr.forEach((ele) => {
		addCard(ele);
	});
	console.log(arr);
}

if (localStorage.getItem("employees") != null) {
	getFromLocal();
}
// const table = document.createElement("table");
// const tHead = document.createElement("thead");
// const tBody = document.createElement("tbody");

// oldEmployees.forEach(addCard());
// let categories = ["Employee ID", "Full Name", "Department", "Level", "Salary"];
// function tHeadGenerator() {
// 	const row = document.createElement("tr");

// 	for (let x = 0; x < 5; x++) {
// 		const cell = document.createElement("th");
// 		const cellContent = document.createTextNode(
// 			// Object.keys(employee0)[x].toUpperCase()
// 			categories[x]
// 		);
// 		cell.appendChild(cellContent);
// 		row.appendChild(cell);
// 	}

// 	tHead.appendChild(row);
// 	table.appendChild(tHead);
// }

// function tBodyGenerator() {
// 	for (let x = 0; x <= 6; x++) {
// 		const row = document.createElement("tr");

// 		for (let j = 0; j < 6; j++) {
// 			const cell = document.createElement("td");
// 			if (j == 4) {
// 				continue;
// 			}
// 			let person = Object.values(employees[x]);
// 			const cellContent = document.createTextNode(person[j]);

// 			cell.appendChild(cellContent);
// 			row.appendChild(cell);
// 		}
// 		tBody.appendChild(row);
// 	}

// 	table.appendChild(tBody);
// }

// function render() {
// 	tHeadGenerator();
// 	tBodyGenerator();
// 	document.getElementById("main").appendChild(table);
// 	for (let i = 0; i <= 6; i++) {
// 		console.log(
// 			"Employee Name: " +
// 				employees[i].fullName +
// 				", Salary: " +
// 				employees[i].salary
// 		);
// 	}
// }

// render();
