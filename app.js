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

const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

let employees = [
	employee0,
	employee1,
	employee2,
	employee3,
	employee4,
	employee5,
	employee6,
];
let categories = ["Employee ID", "Full Name", "Department", "Level", "Salary"];
function tHeadGenerator() {
	const row = document.createElement("tr");

	for (let x = 0; x < 5; x++) {
		const cell = document.createElement("th");
		const cellContent = document.createTextNode(
			// Object.keys(employee0)[x].toUpperCase()
			categories[x]
		);
		cell.appendChild(cellContent);
		row.appendChild(cell);
	}

	tHead.appendChild(row);
	table.appendChild(tHead);
}

function tBodyGenerator() {
	for (let x = 0; x <= 6; x++) {
		const row = document.createElement("tr");

		for (let j = 0; j < 6; j++) {
			const cell = document.createElement("td");
			if (j == 4) {
				continue;
			}
			let person = Object.values(employees[x]);
			const cellContent = document.createTextNode(person[j]);

			cell.appendChild(cellContent);
			row.appendChild(cell);
		}
		tBody.appendChild(row);
	}

	table.appendChild(tBody);
}

function render() {
	tHeadGenerator();
	tBodyGenerator();
	document.getElementById("main").appendChild(table);
	for (let i = 0; i <= 6; i++) {
		console.log(
			"Employee Name: " +
				employees[i].fullName +
				", Salary: " +
				employees[i].salary
		);
	}
}

render();
