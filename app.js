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

function render() {
	let employees = [
		employee0,
		employee1,
		employee2,
		employee3,
		employee4,
		employee5,
		employee6,
	];
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
// console.log(employee0);
