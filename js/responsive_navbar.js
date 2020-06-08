
/* <---------- Responsive Navbar ----------> */
const openIcon = document.querySelector(".hamburger-icon")
const linksWrapper = document.querySelector(".nav-items-wrapper");
const backdrop = document.querySelector(".backdrop")
const closeIcon = document.querySelector(".close-btn")

openIcon.addEventListener("click", () => {
	linksWrapper.classList.add("open")
})

closeIcon.addEventListener("click", () => {
	linksWrapper.classList.remove("open")
})
backdrop.addEventListener("click", () => {
	linksWrapper.classList.remove("open")
})



/* <---------- Privacy Modal (footer) ----------> */

const policyModal = document.querySelector("#policy-modal")
const modalButton = document.querySelectorAll(".modal-button")
const modalBackdrop = document.querySelector(".modal-backdrop")
const infoBtns = document.querySelectorAll(".toggle-info button");
const policySections = document.querySelectorAll(".modal-window article")


modalButton.forEach(btn => btn.addEventListener("click", function() { policyModal.classList.add("modal-open") }))
modalBackdrop.addEventListener("click", function() { policyModal.classList.remove("modal-open") })

infoBtns.forEach(infoBtn => {
	infoBtn.addEventListener("click", function() {
		// infoBtns.forEach(b => b.classList.remove("active"))
		document.querySelector(".toggle-info .active").classList.remove("active")
		infoBtn.classList.add("active")

		policySections.forEach(section => section.classList.toggle("active"))
	})
})
