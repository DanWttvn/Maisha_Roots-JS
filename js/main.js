
/* Navbar adn popups appear on Scroll */
window.onload = function() {
	$('#preloader').fadeOut(400);

	/* <---------- Header logo animation ----------> */
	const header = document.querySelector(".header-img")
	// setTimeout(() => {
		header.style.transform = "scale(1.2)";
		header.style.opacity = "1";
	// }, 800);


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
}

$(document).ready(function(){    

	$(".navbar").hide();
	$(".newsletter-popup").hide();
	$(".policy-popup").hide();

	$(window).scroll(function(){  
		if ($(this).scrollTop() > $(".header-section").height() - 300) {
			$('.navbar').fadeIn(400);

			const policyAccepted = checkCookie("policy_accepted");
			if(!policyAccepted) $(".policy-popup").fadeIn(400);

			const newsletterClosed = checkCookie("newsletter_closed")
			if(policyAccepted && !newsletterClosed) {
				setTimeout(function(){$(".newsletter-popup").fadeIn(400)}, 3000)
			}
		} else {
			$('.navbar').fadeOut(400);
			$(".newsletter-popup").fadeOut(400);
		}
	});

	/* <---------- Accept cookies ----------> */
	// when the cookies are accepted, a  new cookie is stored with the value of true. When the page loades, it will check it so the message doesnt show again
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function checkCookie(cookieToCheck) {
		var name = cookieToCheck + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}


	/* <---------- Close Popups ----------> */
	const newsletterPopup = document.querySelector(".newsletter-popup");
	const closeNewsletter = document.querySelector(".newsletter-popup i.fa-times")

	closeNewsletter.addEventListener("click", () => {
		newsletterPopup.style.display = "none"
		setCookie("newsletter_closed", "true", 1)
	})

	const policyPopup = document.querySelector(".policy-popup");
	const acceptPolicy = document.querySelector(".policy-popup button")

	acceptPolicy.addEventListener("click", () => {
		policyPopup.style.display = "none"
		setCookie("policy_accepted", "true", 15)
	})


	/* <---------- Smooth Scroll ----------> */
	const scrollNavbar = new SmoothScroll('.navbar a[href*="#"]', {
		speed: 300 // a menos mas
	});


	/* <---------- Navbar ----------> */

	/* Change Active on Scroll */ 
	const sectionsArray = document.querySelectorAll("body > section");

	// Object with the section id and its position in px
	let sectionsPos = {};

	getSectionsPos();
	window.addEventListener('resize', getSectionsPos);
	
	function getSectionsPos() {
		sectionsArray.forEach(section => {
			sectionsPos[section.id] = section.offsetTop; // distancia respecto al parent posicionado (body?)
		})
	}

	window.addEventListener('scroll', activeClassOnScroll);
	function activeClassOnScroll() {
		let scrollPos = document.documentElement.scrollTop  || document.body.scrollTop;
		
		for(id in sectionsPos) {	
			//! cambiar segun height user (ordena 500)
			const offset = 1200
			
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
		// Vertical pixels:
		let scrollPos = document.documentElement.scrollTop  || document.body.scrollTop;

		for(id in sectionsPos) {
			//! cambiar con width (ordena 500)
			const offset = 1200
			// const offset = innerHeight
			// console.log({offset});
			
			if(sectionsPos[id] - offset <= scrollPos) {
				// console.log(id);				
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

})