
/* <---------- Stripe ----------> */
(function() {
	var stripe = Stripe('pk_test_JX0416brSyfuCM9j6ZCVsorX00xR15bINY');

	var checkoutButton = document.getElementById('checkout-button-sku_HF2Zqg8Ayxqr6x');

	checkoutButton.addEventListener('click', function () {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		stripe.redirectToCheckout({
			items: [{sku: 'sku_HF2Zqg8Ayxqr6x', quantity: 1}],
			
			// Do not rely on the redirect to the successUrl for fulfilling
			// purchases, customers may not always reach the success_url after
			// a successful payment.
			// Instead use one of the strategies described in
			// https://stripe.com/docs/payments/checkout/fulfillment
			successUrl: 'http://localhost:5500/donate-success.html',
			cancelUrl: 'http://localhost:5500/donate.html',
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

	var stripeSubscription = Stripe('pk_test_U1vwYDpxJPMhNaupWvnihtOL00HTg9c4J9');

	var checkoutButton2 = document.getElementById('checkout-button-plan_HF4CfR984Uf4i4');
	checkoutButton2.addEventListener('click', function () {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		stripeSubscription.redirectToCheckout({
			items: [{plan: 'plan_HF4CfR984Uf4i4', quantity: 1}],
		
			// Do not rely on the redirect to the successUrl for fulfilling
			// purchases, customers may not always reach the success_url after
			// a successful payment.
			// Instead use one of the strategies described in
			// https://stripe.com/docs/payments/checkout/fulfillment
			successUrl: 'http://localhost:5500/donate-success.html',
			cancelUrl: 'http://localhost:5500/donate.html'
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
})();
