
/* <---------- Stripe ----------> */
(function() {
	const stripe = Stripe('pk_live_PdGQI3Eoc7ncw1osXcWZN0xW00EVyMx7un');
	
	// One-time Donations
	const checkoutButtonMedio = document.getElementById('checkout-button-price_HL0w1YXrLimiFV');
	checkoutButtonMedio.addEventListener('click', function () {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		stripe.redirectToCheckout({
		lineItems: [{price: 'price_HL0w1YXrLimiFV', quantity: 1}],
		mode: 'payment',
		// Do not rely on the redirect to the successUrl for fulfilling
		// purchases, customers may not always reach the success_url after
		// a successful payment.
		// Instead use one of the strategies described in
		// https://stripe.com/docs/payments/checkout/fulfillment
		successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
		cancelUrl: window.location.protocol + '//www.maisharoots.org/covid-project',
		})
		.then(function (result) {
		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer.
			var displayError = document.getElementById('error-message');
			displayError.textContent = result.error.message;
		}
		});
	});


	const checkoutButton1kit = document.getElementById('checkout-button-price_HL0vZgL547Epsz');
	checkoutButton1kit.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'price_HL0vZgL547Epsz', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/covid-project',
		})
		.then(function (result) {
			if (result.error) {
				var displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});


	
	const checkoutButton2kits = document.getElementById('checkout-button-price_HL0xau4P17HixM');
	checkoutButton2kits.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'price_HL0xau4P17HixM', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/covid-project',
		})
		.then(function (result) {
			if (result.error) {
				var displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});


	const checkoutButton3kits = document.getElementById('checkout-button-price_HL0yJl7FnzTXe5');
	checkoutButton3kits.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'price_HL0yJl7FnzTXe5', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/covid-project',
		})
		.then(function (result) {
			if (result.error) {
				var displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});
})();
