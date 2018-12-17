paypal.Button.render({
  // Configure environment
  env: 'sandbox',
  client: {
    sandbox: 'demo_sandbox_client_id',
    production: 'demo_production_client_id'
  },
  // Customize button (optional)
  locale: 'es_VE',
  style: {
    color: 'gold',   // 'gold, 'blue', 'silver', 'black'
    size:  'medium', // 'medium', 'small', 'large', 'responsive'
    shape: 'rect'    // 'rect', 'pill'
  },
  // Set up a payment
payment: function (data, actions) {
  return actions.payment.create({
    transactions: [{
      amount: {
        total: '1.00',
        currency: 'USD',
      },
      description: 'Donación Para La Voz de OIENIV.',
    }],
  });
},
  // Execute the payment
  onAuthorize: function (data, actions) {
    return actions.payment.execute()
      .then(function () {
        FB.AppEvents.logEvent("Donacion");
        // Show a confirmation message to the buyer
        window.alert('Gracias por tu apoyo.');
      });
  }
}, '#paypal-button');