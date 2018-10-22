function TabNavigator(div) {
  this.div = div
}

TabNavigator.prototype.init = function() {
  var modules = $(this.div);
  modules.hide();
  this.createTabs(modules);
};

TabNavigator.prototype.createTabs = function(modules) {
  var modulesList = $('<div>');
  modules.each(function() {
    var $this = $(this);
    var title = $this.find('h2').html();
    var id = $this.attr('id');
    modulesList.append('<li ' + 'data-id=' + id + '>' + title + '</li>');
  });
  modulesList.insertBefore(modules.first());
  this.setModuleClickHandler(modules, modulesList);
  this.selectedModule = modulesList.first();
  this.selectedModuleId = this.selectedModule.attr('id');

  // Open first tab
  modulesList.children().first().trigger('click');
};

TabNavigator.prototype.setModuleClickHandler = function(modules, modulesList) {
  var _this = this;
  modulesList.on('click', function(event) {
  var target = event.target;
  var targetId = $(target).attr('data-id');
  $(target).addClass('current');
  modules.siblings('#' + targetId).show();

  // Removing previous selected tab
  _this.selectedModule.removeClass('current');
  modules.siblings('#' + _this.selectedModuleId).hide();

  // Setting current selected tab
  _this.selectedModule = $(target);
  _this.selectedModuleId = targetId;
});
}
var tabNavigator = new TabNavigator('div.module');
tabNavigator.init();
