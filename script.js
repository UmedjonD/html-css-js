$(function() {
    $("form[name='registration']").validate({
      // правила проверки
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        password2: {
            required: true,
            minlength: 5
          }
      },
      // мессеж при ошибки
      messages: {
        firstname: "пожалуйста введите имя",
        lastname: "пожалуйста введите фамилию",
        password: {
          required: "введите пароль",
          minlength: "пароль не должен быть менее 5 символов"
        },
        password2: {
            required: "повторите пароль",
            minlength: "пароль не должен быть менее 5 символов"  
        },
        email: "введите емайл"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

$('.product').on('click', function() {
    $('.product').show();
    $('.product_detail').hide();
    let preview = $(this);
    let detail = $(this).next();
    preview.hide();
    detail.show();
    preview.detach().appendTo('#viewed');
    detail.detach().appendTo('#viewed');
});

$('.product_detail .add').on('click', function() {
    let detail = $(this).parents('.product_detail');
    let name = detail.find('.name').text();
    let price = detail.find('.price').text();
    let priceInt = parseInt(price);
    let img = detail.find('img').attr('src');
    
    $('#count').text(parseInt($('#count').text()) + 1);

    let summa = parseInt($('#summa').text()) + priceInt;
    let skidka = Math.ceil(summa * 0.1)
    let itogo = summa - skidka;

    $('#summa').text(summa);
    $('#skidka').text(skidka);
    $('#itogo').text(itogo);

   let elementHtml = $('<tr>' +
        '<td><img src="' + img + '"></td>' +
        '<td>' + name + '</td>' +
        '<td>' + price + '</td>' +
        '<td><span class="close">x</span></td>' +
   '</tr>');

   elementHtml.find('.close').on('click', function() {
       elementHtml.remove();
       $('#count').text(parseInt($('#count').text()) - 1);
        let summa = parseInt($('#summa').text()) - priceInt;
        let skidka = Math.ceil(summa * 0.1)
        let itogo = summa - skidka;
        
        $('#summa').text(summa);
        $('#skidka').text(skidka);
        $('#itogo').text(itogo);
   });

    $('#okno_elements_table').append(elementHtml);
});
