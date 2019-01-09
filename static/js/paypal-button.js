function render() {
  paypal.Button.render({
    // Configure environment
    env: 'production',
    client: {
      sandbox: 'AacFnf16i_VyllYDrgalLVTpMp2Mf6Hn_62ann5g2uJ3FDMxiUM1YUgbaUr8rcZHRMJDZ-r7_U0KxC4o',
      production: 'AQC48XK4IJG2HFukPdBD9aUC42OhZTayEwPP69NBxq2f89vhbo1vnlPJvoodz6cZBBeHSGsEC7ehvRXB'
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
}