
/* <---------- Stripe ----------> */
(function() {
	const stripe = Stripe('pk_live_PdGQI3Eoc7ncw1osXcWZN0xW00EVyMx7un');
	
	// One-time Donations
	const checkoutButtonD10 = document.getElementById('checkout-button-sku_HHFyp41IihcpFQ');
	checkoutButtonD10.addEventListener('click', function () {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHFyp41IihcpFQ', quantity: 1}],
			mode: 'subscription',
			// Do not rely on the redirect to the successUrl for fulfilling
			// purchases, customers may not always reach the success_url after
			// a successful payment.
			// Instead use one of the strategies described in
			// https://stripe.com/docs/payments/checkout/fulfillment
			//* CHANGE BEFORE DEPLOY *//
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
			// successUrl: window.location.protocol + '//www.maisharoots.org/success',
			// cancelUrl: window.location.protocol + '//www.maisharoots.org/canceled',
		  })
		.then(function (result) {
			if (result.error) {
				// If `redirectToCheckout` fails due to a browser or network
				// error, display the localized error message to your customer.
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonD20 = document.getElementById('checkout-button-sku_HHFyT6kLZuD23W');
	checkoutButtonD20.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHFyT6kLZuD23W', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonD30 = document.getElementById('checkout-button-sku_HHG06oLOQX1D3J');
	checkoutButtonD30.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHG06oLOQX1D3J', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonD50 = document.getElementById('checkout-button-sku_HHG1NxSlHU1gKE');
	checkoutButtonD50.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHG1NxSlHU1gKE', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonD75 = document.getElementById('checkout-button-sku_HHG16e540MAIDR');
	checkoutButtonD75.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHG16e540MAIDR', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonD99 = document.getElementById('checkout-button-sku_HHG21yPmyQ1Wcz');
	checkoutButtonD99.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'sku_HHG21yPmyQ1Wcz', quantity: 1}],
			mode: 'payment',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	// Subscriptions
	const checkoutButtonS5 = document.getElementById('checkout-button-plan_HHGFGxozSIFia4');
	checkoutButtonS5.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGFGxozSIFia4', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS10 = document.getElementById('checkout-button-plan_HHGG8x4hRFelM7');
	checkoutButtonS10.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGG8x4hRFelM7', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS15 = document.getElementById('checkout-button-plan_HHGHxTGHDhfAUr');
	checkoutButtonS15.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGHxTGHDhfAUr', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS20 = document.getElementById('checkout-button-plan_HHGIpo9BeQWYwA');
	checkoutButtonS20.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGIpo9BeQWYwA', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS25 = document.getElementById('checkout-button-plan_HHGIiM6dW2JsEU');
	checkoutButtonS25.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGIiM6dW2JsEU', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS50 = document.getElementById('checkout-button-plan_HHGIl0261Y9EK0');
	checkoutButtonS50.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGIl0261Y9EK0', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});

	const checkoutButtonS99 = document.getElementById('checkout-button-plan_HHGJ59foEBYEbN');
	checkoutButtonS99.addEventListener('click', function () {
		stripe.redirectToCheckout({
			lineItems: [{price: 'plan_HHGJ59foEBYEbN', quantity: 1}],
			mode: 'subscription',
			successUrl: window.location.protocol + '//www.maisharoots.org/donate-success',
			cancelUrl: window.location.protocol + '//www.maisharoots.org/#collaborate'
		  })
		.then(function (result) {
			if (result.error) {
				let displayError = document.getElementById('error-message');
				displayError.textContent = result.error.message;
			}
		});
	});
})();
