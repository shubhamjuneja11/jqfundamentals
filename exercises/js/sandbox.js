$('img[alt]').each(function(index, element) { console.log(element['alt']); });
$('.input_text').closest('#search')
  .addClass('myform');
$('#myList>li.current').removeClass('current')
  .next('li')
  .addClass('current');
$('#specials').find('.input_submit');
$('#slideshow>li').eq(0)
  .addClass('current')
  .siblings()
