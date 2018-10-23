$('img[alt]').each(function(index, element) { console.log(element['alt']); });
$('.input_text').parents('form')
                .addClass('myform');
$('#myList > li.current').removeClass('current')
                         .next('li')
                         .addClass('current');
$('#specials select').closest('ul')
                     .find('input.input_submit');
$('#slideshow > li:first').addClass('current')
                          .siblings()
                          .addClass('disabled');
