function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!")

	function showSkills() {
		let skills = ["HTML","CSS","PHP"];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>")
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Добро пожаловать!")
		} else {
			alert("Вход запрещен!")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num * num)
	}
	calcPow(4)
}
myFirstApp("Valery", 28)