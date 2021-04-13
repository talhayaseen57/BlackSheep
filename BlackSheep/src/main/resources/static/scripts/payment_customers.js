if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
	button = document.getElementsByClassName("payment-form")[0];
     button.onsubmit = function (e) {
        e.preventDefault();
   
        fetch('/payment_customers', {
            method: 'POST',
            body: JSON.stringify({
               'items' : JSON.parse(localStorage.getItem("items")),
               'totalPrice' : JSON.parse(localStorage.getItem("totalPrice")),
               'streetAddress': document.getElementById('adr').value,
               'city':  document.getElementById('city').value,
               'state':  document.getElementById('state').value,
               'postalCode':  document.getElementById('postalcode').value,
               
            }),
            headers: {
	            'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.getElementsByClassName("csrf_token")[0].value
            }
        })
        .then(function(res){ console.log(res) })
        .catch(function (err) {
           console.log(err);
        })
      }
$('#payment-form').validate({
                    roles: {
                       address: {
                            required: true,
                        },
                        city: {
                            required: true,
                        },
                        state: {
                            required: true,
                        },
                        zip: {
                            required: true,
                        },
                        cardname: {
                            required: true,
                        },
                        cardnumber: {
                            required: true,
                        },
                        expmonth: {
                            required: true,
                        },
                        expyear: {
                            required: true,
                        },
                        cvv: {
                            required: true,
                        },

                    },
                    messages: {
                        city: "Please input city*",
                        address: "Please input address*",
                        state: "Please input state*",
                        zip: "Please input address*",
                        cardname: "Please input card name*",
                        cardnumber: "Please input card number*",
                        expmonth: "Please input exp month*",
                        expyear: "Please input exp year*",
                        cvv: "Please input cvv*",
                    },
                });
    }