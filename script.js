// $(function() {
//     $("form[name='registration']").validate({
//       // правила проверки
//       rules: {
//         firstname: "required",
//         lastname: "required",
//         email: {
//           required: true,
//           email: true
//         },
//         password, password2: {
//           required: true,
//           minlength: 5
//         }
//       },
//       // мессеж при ошибки
//       messages: {
//         firstname: "Пожалуйста введите имя",
//         lastname: "пожайлуйста введите фамилию",
//         password: {
//           required: "введите пароль",
//           minlength: "пароль не должен быть менее 5 символов"
//         },
//         email: "введите емайл"
//       },
//       submitHandler: function(form) {
//         form.submit();
//       }
//     });
//   });

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

    $('#okno_elements').append(
        '<div class="in_korzina">' +
            '<div> <img src="' + img + '"></div>' +
            '<div class="nameK">'  + name + '</div>' +
            '<div class="priceK">'  + price + '</div>' +
        '</div>'
    );
});
