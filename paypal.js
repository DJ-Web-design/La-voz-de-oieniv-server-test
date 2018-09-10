paypal.Button.render({
  // Configure environment
  env: 'sandbox',
  client: {
    sandbox: 'demo_sandbox_client_id',
    production: 'demo_production_client_id'
  },
  // Customize button (optional)
  locale: 'es_LA',
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
        total: '30.11',
        currency: 'USD',
        details: {
          subtotal: '30.00',
          tax: '0.07',
          shipping: '0.03',
          handling_fee: '1.00',
          shipping_discount: '-1.00',
          insurance: '0.01'
        }
      },
      description: 'The payment transaction description.',
      custom: '90048630024435',
      //invoice_number: '12345', Insert a unique invoice number
      payment_options: {
        allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
      },
      soft_descriptor: 'ECHI5786786',
      item_list: {
        items: [
          {
            name: 'hat',
            description: 'Brown hat.',
            quantity: '5',
            price: '3',
            tax: '0.01',
            sku: '1',
            currency: 'USD'
          },
          {
            name: 'handbag',
            description: 'Black handbag.',
            quantity: '1',
            price: '15',
            tax: '0.02',
            sku: 'product34',
            currency: 'USD'
          }
        ],
        shipping_address: {
          recipient_name: 'Brian Robinson',
          line1: '4th Floor',
          line2: 'Unit #34',
          city: 'San Jose',
          country_code: 'US',
          postal_code: '95131',
          phone: '011862212345678',
          state: 'CA'
        }
      }
    }],
    note_to_payer: 'Contact us for any questions on your order.'
  });
},
  // Execute the payment
  onAuthorize: function (data, actions) {
    return actions.payment.execute()
      .then(function () {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
      });
  }
}, '#paypal-button');




//Credenciales de Firebase admin


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-lavozdeoieniv.firebaseio.com"
});


//Cloud Messagging

var ServerKey = "AAAABalSE5s:APA91bHmAsOt8ScUTNLkTCf-0bRQs2RQ1ozxejucJyEAkqQlAdfOuPmal6-PsAAsH803aVLT_ItyjuJeIM7q97UFbzCYGC1EKgnR6HUvJJSOWH-KRXwjq45yMkupaeUd2FExag0jmkPZ";

var ChildServerKey = "AIzaSyC4xAVKQsK2ALcoP5nyNxvzaCBpOX3y2lA";

var ReminderID = "24315564955";

var PairOfKeys = "BAphmjGxvZ1HuRsW4hW8UhfX7I0-V204z3KpO5JxnGoQ0yAMDjhcC1-Yq2lO2sYN0RtIQNny-iNq54e7aDSyzz4";

var APIKey = "AIzaSyC2RvmGHYtaqUa5lEXb3MLl_Mv4ECiLoBE";

//Refresh Token Google Api
  //init
    function start() {
      gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          // Scopes to request in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
      });
    }


    //button Acces
    auth2.grantOfflineAccess().then(signInCallback);

    //callback
    function signInCallback(authResult) {
      if (authResult['code']) {
    
        // Hide the sign-in button now that the user is authorized, for example:
        $('#signinButton').attr('style', 'display: none');
    
        // Send the code to the server
        $.ajax({
          type: 'POST',
          url: 'http://example.com/storeauthcode',
          // Always include an `X-Requested-With` header in every AJAX request,
          // to protect against CSRF attacks.
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          contentType: 'application/octet-stream; charset=utf-8',
          success: function(result) {
            // Handle or verify the server response.
          },
          processData: false,
          data: authResult['code']
        });
      } else {
        // There was an error.
      }
    }


