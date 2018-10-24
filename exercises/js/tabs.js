function TabNavigator(modulesData) {
  this.modulesBlock = modulesData.moduleBlock;
}

TabNavigator.prototype.init = function() {
  this.modulesBlock.hide();
  this.createTabs();
  this.setModuleToggler();
  this.selectFirstModule();
};

TabNavigator.prototype.createTabs = function() {
  var _this = this;
  this.modulesList = $('<div>');
  this.modulesBlock.each(function() {
    var $this = $(this),
      title = $this.find('h2').html(),
      id = $this.attr('id');
    _this.modulesList.append('<li ' + 'data-id=' + id + '>' + title + '</li>');
  });
  this.modulesList.insertBefore(this.modulesBlock.first());
};

TabNavigator.prototype.selectFirstModule = function() {
  this.modulesList.children().first().trigger('click');
};

TabNavigator.prototype.setModuleToggler = function() {
  var _this = this;
  this.modulesList.on('click', 'li', function(event) {
    var target = $(this),
      targetId = target.attr('data-id');
    target.addClass('current');
    _this.modulesBlock.siblings('#' + targetId).show();

    // Removing previous selected tab
    if(_this.selectedModule) {
    _this.selectedModule.removeClass('current');
    _this.modulesBlock.siblings('#' + _this.selectedModuleId).hide();
}
    // Setting current selected tab
    _this.selectedModule = target;
    _this.selectedModuleId = targetId;
  });
}

$(function() {
  var options = {
    moduleBlock: $('div.module')
  };
  var tabNavigator = new TabNavigator(options);
  tabNavigator.init();
});
