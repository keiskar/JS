let modal = document.querySelector(".modal"),
	receiveBtn = document.getElementById("receive"),
	close = document.querySelector(".close"),
	nameInput = document.getElementsByClassName("contactform_name")[0],
	text = document.getElementsByName("message")[0];

receiveBtn.addEventListener("click", function() {
	modal.style.display = "block"
})

close.addEventListener("click", function() {
	modal.style.display = "none"
})

nameInput.addEventListener("input", function() {
	text.value = "Меня зовут " + nameInput.value + ". И я хочу уточнить:";
	if (nameInput.value == "") {
		text.value = ""
	}
})