var modules = $('div.module');
//modules.hide();
//modules.first ().prepend('</ul>')
var modulesList = $('<div>');
modules.each(function() {
  var $this = $(this);
  var title = $this.find('h2').html();
  var id = $this.attr('id');
  // console.log(title);
  // console.log(id);
  modulesList.append('<li ' + 'data-id=' + id + '>' + title + '</li>');
});
console.log(modulesList.html());
modulesList.on('click', function(event) {
  var target = event.target;
  var targetId = $(target).attr('data-id');
  console.log(modules.find('#'+targetId));
  //$this.addClass('current');
  //modules.
});
modules.before(modulesList);
//console.log(modulesList.html());
