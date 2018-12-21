$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password, password2: {
          required: true,
          minlength: 5
        }
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

$('.product').on('click', function() {
    $('.product').show();
    $('.product_detail').hide();
    var preview = $(this);
    var detail = $(this).next();
    preview.hide();
    detail.show();
    preview.detach().appendTo('#viewed');
    detail.detach().appendTo('#viewed');
});

$('.product_detail .add').on('click', function() {
    var detail = $(this).parents('.product_detail');
    var name = detail.find('.name').text();
    var price = detail.find('.price').text();
    var priceInt = parseInt(price);
    var img = detail.find('img').attr('src');
    
    $('#count').text(parseInt($('#count').text()) + 1);

    var summa = parseInt($('#summa').text()) + priceInt;
    var skidka = Math.ceil(summa * 0.1)
    var itogo = summa - skidka;

    $('#summa').text(summa);
    $('#skidka').text(skidka);
    $('#itogo').text(itogo);

    $('#okno_elements').append(
        '<div>' +
            '<div> <img src="' + img + '"></div>' +
            '<div class="nameK">'  + name + '</div>' +
            '<div>'  + price + '</div>' +
        '</div>'
    );
});

