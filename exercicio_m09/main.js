$(document).ready(function(){
    $('#inputNovaTarefa').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + ' <i class="fas fa-check"></i></li>');
        $(this).val();
    });

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('feito');
    });

    $('ul').on('click', 'li', function() {
        var texto = $(this).text();
        $(this).html('<s>' + texto )
    });
});