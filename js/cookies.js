(function () {
	const policyPopup = document.querySelector(".policy-popup");
	const acceptPolicy = document.querySelector(".policy-popup button")

	/* <---------- Check cookies ----------> */
	const policyAccepted = checkCookie("policy_accepted");
	if(!policyAccepted) policyPopup.style.display = "block";

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
	acceptPolicy.addEventListener("click", () => {
		policyPopup.style.display = "none"
		setCookie("policy_accepted", "true", 15)
	})

})();