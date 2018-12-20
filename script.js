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