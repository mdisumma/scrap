const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const click = document.querySelector("body");

click.addEventListener("click", (e) => {
	console.log(e);
	doorControl();
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
}
