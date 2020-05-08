

/* <---------- Accordion ----------> */

const accordionBtns = document.querySelectorAll(".accordion-btn");

// First open by default
const firstAccContent = document.querySelector(".accordion-btn.open + .accordion-content");
firstAccContent.style.maxHeight = firstAccContent.scrollHeight + "px"

accordionBtns.forEach(accBtn => {
	accBtn.addEventListener("click", function() {
		accBtn.style

		// accordionBtns.forEach(accBtn => accBtn.classList.remove("open")) se me borra en todos, asi que no vale

		accBtn.classList.toggle("open");
		
		const content = accBtn.nextElementSibling;
		if(content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px"
		}
	})
})



/* <---------- Footer on bottom ----------> */

const body = document.querySelector("body")
// const bodyHeight = parseFloat(getComputedStyle(body.height, 10));
var bodyHeight = body.clientHeight;
if(bodyHeight < screen.height ) {
	const footer = document.querySelector("footer")
	footer.classList.add("setToBottom")
}
