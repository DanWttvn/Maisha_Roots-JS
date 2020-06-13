(function () {
	const policyPopup = document.querySelector(".policy-popup");
	const acceptPolicy = document.querySelector(".policy-popup button")

	/* <---------- Check cookies ----------> */
	const policyAccepted = checkCookie();
	if(!policyAccepted) policyPopup.style.display = "block";

	/* <---------- Accept cookies ----------> */
	// when the cookies are accepted, a  new cookie is stored with the value of true. When the page loades, it will check it so the message doesnt show again
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function checkCookie() {
		var cookies = document.cookie
							.split(";")
							.map(cookie => cookie.split("="))
							.reduce((acc, [key, value]) => ({
								...acc, [key.trim()]: decodeURIComponent(value)
							}))
		if(cookies.policy_accepted) return true;
	}

	/* <---------- Close Popups ----------> */
	acceptPolicy.addEventListener("click", () => {
		policyPopup.style.display = "none"
		setCookie("policy_accepted", "true", 15)
	})

})();