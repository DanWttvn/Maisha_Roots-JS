
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

let sliderIndex = 0; // para multiplicaarlo
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
arrangeNodes()

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
			// console.log("last");
			sliderIndex = 0;
		} else if (dir === "prev" && sliderIndex === 0) {
			// console.log("first");
			sliderIndex = 0
		} else if (dir === "next") {
			// console.log("next");
			sliderIndex++
		} else {
			// console.log("prev");
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






/* <---------- Timeline 1 ----------> */

// $(window).scroll(() => {
// 	// const timelineIndicator = document.querySelector(".timeline-indicator");
// 	// const timelineRail = document.querySelector(".timeline-rail");
// 	const timelineIndicator = $(".timeline-indicator");
// 	const timelineRail = $(".timeline-rail");
// 	let gradient;
// 	let line;

// 	line = timelineIndicator.offset().top - timelineRail.offset().top; // offset es jQ: coordenadas del elemento
// 	gradient = "linear-gradient(to top, #d6d6d6 " + line + "px,#ff0000 " + line + "px)"
// 	timelineRail.css("background", gradient)
// 	// cambiar en v de un gradient por la height de al linea? 
// })

/* <---------- Timeline 2 ----------> */
// https://codepen.io/plasm/pen/oZbXmj?editors=1000

// $(function() {
// 	function sumSection() {
// 		return $(".timeline-section").height() 
// 	}

// 	function setDimensionBar() {
// 		$(".timeline-bar").css({
// 			"height": ($(window).height()/sumSection())*100 + "%" // esto es lo que tengo qu ecambiar? window es el tamaño de la pantalla del usuario
// 		})
// 	}

// 	function setSection() {
// 		$.each($("section"), (i, element) => {
// 			$(element).css({
// 				"min-height": $(window).height()
// 			})
// 		})
// 	}

// 	function addBehaviours() {
// 		let sections = $("section");
// 		$.each($(".node"), e => {
// 			e.preventDefault();
// 			let scroll = $(sections[i]).offset().top;
// 			$("html, body").animate({
// 				scrollTop: scroll
// 			}, 500)
// 		})
// 	}

// 	function arrangeNodes() { // automatizazcion para que se actualice solo al añadir secciones en el HTML
// 		$(".node").remove();
// 		$.each($("section"), (i, section) => {
// 			let name = $(section).data("name");
// 			let node = $("<li class='node'><span>" + name + "</span></li>");
// 			$(".timeline-box").append(node)
			
// 			$(node).css({
// 				top: ($(".timeline-box").height() / $(document).height()) * $(section).offset().top
// 			})
// 		});
// 		addBehaviours();
// 	}

// 	$(window).on("scroll", () => {
// 		let top = (window.scrollY / sumSection()) * 100;
// 		$(".timeline-bar").css({
// 			top: top + "%"
// 		})
// 	});;

// 	$(window).on("resize", () => {
// 		setSection();
// 		arrangeNodes()
// 		setDimensionBar()
// 	})

// 	setTimeout(() => {
// 		setSection()
// 		arrangeNodes()
// 		setDimensionBar()
// 	}, 200)
// })
