let selectedColor = "blue";
	let painting = document.querySelector(".painting");
	painting.addEventListener("click", function (e) {
	  e.target.style.backgroundColor = selectedColor;
	});
	

	// let colorChoices = document.querySelectorAll(".color-choice");
	// for (let i = 0; i < colorChoices.length; i++) {
	//   colorChoices[i].addEventListener("click", function () {
	//     selectedColor = colorChoices[i].id;
	//   });
	// }
	

	let palette = document.querySelector(".palette");
	palette.addEventListener("click", function (e) {
	  selectedColor = e.target.id;
	});
