
/* Navbar appear on Scroll */
$(function() {
	$(".navbar").hide();
	$(".newsletter-popup").hide();
	$(".policy-popup").hide();
	
    $(document).ready(function(){                    
        $(window).scroll(function(){                     
            if ($(this).scrollTop() > $(".header-section").height() - 300) {
				$('.navbar').fadeIn(400);
				const newsletterClosed = newsletterPopup.classList.contains("closed");
				if(!newsletterClosed) {
					$(".newsletter-popup").fadeIn(400);
				}
				const policyAccepted = policyPopup.classList.contains("accepted")
				console.log(policyAccepted);
				
				if(!policyAccepted) {
					$(".policy-popup").fadeIn(400);
				}
            } else {
				$('.navbar').fadeOut(400);
				$(".newsletter-popup").fadeOut(400);
            }
        });
	});
})


/* <---------- Smooth Scroll ----------> */
const scrollNavbar = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300 // a menos mas
});


/* <---------- Scroll icon Header ----------> */
const scrollIcon = document.querySelector(".header-section .scroll-icon")

/* Appear scroll icon */
setTimeout(() => {
	scrollIcon.removeAttribute("hidden")
}, 1500)

/* Clickable */
const scrollHeader = new SmoothScroll('.scroll-icon a[href*="#"]', {
	speed: 800
});

// ACTIVAR
/* <---------- Close Popups ----------> */
const newsletterPopup = document.querySelector(".newsletter-popup");
const closeNewsletter = document.querySelector(".newsletter-popup i.fa-times")

closeNewsletter.addEventListener("click", () => {
	newsletterPopup.style.display = "none"
	newsletterPopup.classList.add("closed")
})

const policyPopup = document.querySelector(".policy-popup");
const acceptPolicy = document.querySelector(".policy-popup button")

acceptPolicy.addEventListener("click", () => {
	policyPopup.style.display = "none"
	policyPopup.classList.add("accepted")
})



/* <---------- Navbar ----------> */

/* Change Active on Scroll */ 
const sectionsArray = document.querySelectorAll("body > section");
const headerSection = document.querySelector(".header-section");

const headerWidth = parseFloat(getComputedStyle(headerSection).width, 10);

const navbar = document.querySelector(".navbar")
let sectionsPos = {};

getOffsetTop();
window.addEventListener('resize', getOffsetTop);

function getOffsetTop() {
	sectionsArray.forEach(section => {
		sectionsPos[section.id] = section.offsetTop; // distancia respecto al parent posicionado (body?)
	})
}

window.addEventListener('scroll', activeClassOnScroll);
function activeClassOnScroll() {
	let scrollPos = document.documentElement.scrollTop  || document.body.scrollTop; // pixeles que ha bajado el usuario
	
	for(id in sectionsPos) {		
		//! cambiar segun height user (ordena 500)
		const offset = 500
		if(sectionsPos[id] - offset <= scrollPos) {
			document.querySelector(".navbar .active").classList.remove("active")
			document.querySelector(`.navbar a[href*=${id}]`).classList.add("active")
		}
	}
}

/* Change active on Click */ 
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
	item.addEventListener("click", e => {
		e.preventDefault();
		linksWrapper.classList.remove("open") // responsive navb
		handleIndicator(e.target)
	});
})

function handleIndicator(el) {
	navItems.forEach(item => {
		item.classList.remove("active")
	});
	el.classList.add("active")	
}

/* <---------- Fill title ----------> */
window.addEventListener('scroll', visibleClassOnScroll);
function visibleClassOnScroll() {
	let scrollPos = document.documentElement.scrollTop  || document.body.scrollTop; 
	for(id in sectionsPos) {
		//! cambiar con width (ordena 500)
		const offset = 500
		if(sectionsPos[id] - offset <= scrollPos) {
			document.querySelector(`#${id}`).classList.add("visible")
		}
	}
}

/* <---------- Timeline ----------> */
let sliderIndex = 0;
const timelineEvents = document.querySelectorAll(".timeline-event")
const numtimelineEvents = document.querySelectorAll(".timeline-images > .timeline-event").length

const timelineImages = document.querySelector(".timeline-images");
const timelineTexts = document.querySelector(".timeline-texts");
const controlLine = document.querySelector(".control-line-wrapper");
const timelineTitles = document.querySelectorAll(".timeline-event-title");

const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");

controlPrev.addEventListener("click", () => switchEvent("prev"))
controlNext.addEventListener("click", () => switchEvent("next"))


// Add Nodes to the timeline
arrangeNodes();

function arrangeNodes() {
	
	for (let i = 0; i < timelineTitles.length; i++) {
		let node = document.createElement("div");
		node.classList.add("timeline-node")
		node.innerHTML = "<span>" + timelineTitles[i].innerHTML + "</span>";
		node.addEventListener("click", () => switchEvent(i))
		controlLine.append(node);
	}
	addActiveToController();
}

function addActiveToController() {
	let nodes = document.querySelectorAll(".timeline-node")
	nodes.forEach(node => node.classList.remove("active"))
	nodes[sliderIndex].classList.add("active")
}


// Switch Event with Buttons
function switchEvent(dir) {
	if(typeof dir == "string") {
		if(dir === "next" && sliderIndex === numtimelineEvents - 1) {
			sliderIndex = 0;
		} else if (dir === "prev" && sliderIndex === 0) {
			sliderIndex = 0
		} else if (dir === "next") {
			sliderIndex++
		} else {
			sliderIndex--
		}
	} else {
		sliderIndex = dir
	}
	const sliderWidth = parseFloat(getComputedStyle(timelineEvents[0]).width, 10)

	let leftDistance = - sliderIndex * sliderWidth;
	timelineImages.style.transform = "translateX(" + leftDistance + "px)";
	timelineTexts.style.transform = "translateX(" + leftDistance + "px)";

	addActiveToController();
}



/* <---------- Map ----------> */
const btnSp = document.querySelector(".btn-sp");
const closeSp = document.querySelector(".close-sp");
const btnTz = document.querySelector(".btn-tz");
const closeTz = document.querySelector(".close-tz");
const cardSp = document.querySelector(".card-sp");
const cardTz = document.querySelector(".card-tz");

btnSp.addEventListener("click", () => showCard("sp"));
btnTz.addEventListener("click", () => showCard("tz"));
closeSp.addEventListener("click", () => closeCard());
closeTz.addEventListener("click", () => closeCard());


function showCard(country) {
	if(country === "sp") {
		cardSp.style.display = "inline-block";
		cardTz.style.display = "none";
	} else if (country === "tz") {
		cardSp.style.display = "none";
		cardTz.style.display = "inline-block";
	}
}

function closeCard() {
	cardSp.style.display = "none";
	cardTz.style.display = "none";
}



/* <---------- Accordion ----------> */
const accordionBtns = document.querySelectorAll(".accordion-btn");

// First open by default
const firstAccContent = document.querySelector(".accordion-btn.open + .accordion-content");
firstAccContent.style.maxHeight = firstAccContent.scrollHeight + "px"

accordionBtns.forEach(accBtn => {
	accBtn.addEventListener("click", function() {
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


