/* <---------- Navbar ----------> */

/* Smooth Scroll */

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 300 // a menos mas
});

/* Navbar appear on Scroll */
$(function() {
	$(".navbar").hide();
	
    $(document).ready(function(){                    
        $(window).scroll(function(){                     
            if ($(this).scrollTop() > $(".header-section").height() - 250) {
                $('.navbar').fadeIn(400);
            } else {
                $('.navbar').fadeOut(400);
            }
        });
    });
})


/* Change Active on Scroll */ 
const sectionsArray = document.querySelectorAll("section");
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
		const offset = 300
		if(sectionsPos[id] - offset <= scrollPos) {
			document.querySelector(".nav-item.active").classList.remove("active")
			document.querySelector(`a[href*=${id}]`).classList.add("active")
		}
	}
}

/* Change active on Click */ 
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(item => {
	item.addEventListener("click", e => {
		e.preventDefault();
		window.removeEventListener("scroll", activeClassOnScroll)
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
		const offset = 500
		if(sectionsPos[id] - offset <= scrollPos) {
			document.querySelector(`#${id}`).classList.add("visible")
		}
	}
}



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
	const sliderWidth = parseFloat(getComputedStyle(timelineEvents[0]).width, 10)

	if(typeof dir == "string") {
		console.log("prev or next");
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
	
	let leftDistance = - sliderIndex * sliderWidth
	
	// console.log({sliderIndex});
	// console.log({sliderWidth});
	// console.log({leftDistance});

	timelineImages.style.left = "" + leftDistance + "px";
	timelineTexts.style.left = "" + leftDistance + "px";

	// Aprovecho para cambiar el style del selecctionado
	addActiveToController();
}


// Switch Event with Buttons
// function switchEvent(dir) {

// 	timelineImages.style.left = "-1000px";

// 	// Aprovecho para cambiar el style del selecctionado
// }



