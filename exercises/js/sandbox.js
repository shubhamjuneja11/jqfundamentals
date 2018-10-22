$('img[alt]').each(function(index, element) { console.log(element['alt']); });
$('.input_text').closest('#search')
                .addClass('myform');
$('#myList > li.current').removeClass('current')
                         .next('li')
                         .addClass('current');
$('#specials select').closest('ul')
                     .find('.input_submit:first');
$('#slideshow > li').addClass('current')
                    .siblings();
