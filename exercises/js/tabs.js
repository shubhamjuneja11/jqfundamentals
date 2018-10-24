function TabNavigator(modulesBlock) {
  this.modulesBlock = $(modulesBlock);
}

TabNavigator.prototype.init = function() {
  //var modules = $(this.div);
  this.modulesBlock.hide();
  this.createTabs();
};

TabNavigator.prototype.createTabs = function() {
  var modulesList = $('<div>');
  this.modulesBlock.each(function() {
    var $this = $(this);
    var title = $this.find('h2').html();
    var id = $this.attr('id');
    modulesList.append('<li ' + 'data-id=' + id + '>' + title + '</li>');
  });
  modulesList.insertBefore(this.modulesBlock.first());
  this.modulesList = modulesList;
  this.setModuleToggler();
  this.selectedModule = modulesList.first();
  this.selectedModuleId = this.selectedModule.attr('id');

  // Open first tab
  modulesList.children().first().trigger('click');
};

TabNavigator.prototype.setModuleToggler = function() {
  var _this = this;
  this.modulesList.on('click', 'li', function(event) {
    var target = $(this);
    var targetId = target.attr('data-id');
    target.addClass('current');
    _this.modulesBlock.siblings('#' + targetId).show();

    // Removing previous selected tab
    _this.selectedModule.removeClass('current');
    _this.modulesBlock.siblings('#' + _this.selectedModuleId).hide();

    // Setting current selected tab
    _this.selectedModule = target;
    _this.selectedModuleId = targetId;
  });
}

$(function() {
  var tabNavigator = new TabNavigator('div.module');
  tabNavigator.init();
});
