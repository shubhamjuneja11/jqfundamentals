function TabNavigator() {

}

TabNavigator.prototype.init = function() {
  var modules = $('div.module');
modules.hide();
};
var modulesList = $('<div id="moduleslist">');
modules.each(function() {
  var $this = $(this);
  var title = $this.find('h2').html();
  var id = $this.attr('id');
  modulesList.append('<li ' + 'data-id=' + id + '>' + title + '</li>');
});
console.log(modulesList.html());
modulesList.on('click', function(event) {
  var target = event.target;
  var targetId = $(target).attr('data-id');
  $(target).addClass('current');
  modules.siblings('#' + targetId).show();
  moduleslist.each(function() {
    $(this).removeClass('current');
  });
  //modules.
});
modulesList.insertBefore(modules.first());
//console.log(modulesList.html());
