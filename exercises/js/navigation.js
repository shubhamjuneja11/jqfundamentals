function DropDownMenuHandler(options) {
  this.menu = options.menuDiv;
}

DropDownMenuHandler.prototype.init = function() {
  this.setMenuHover();
};

DropDownMenuHandler.prototype.setMenuHover = function() {
  var _this = this;
  this.menu.find('li').on('mouseenter mouseleave', function(event) {
    // Toggle menu
    _this.toggleMenu($(this));
  });
};

DropDownMenuHandler.prototype.toggleMenu = function(hoveredMenu) {
  // Change color of hovered item
  hoveredMenu.toggleClass('hover');
  // Open submenu
  this.toggleDropDown(hoveredMenu);
};

DropDownMenuHandler.prototype.toggleDropDown = function(menuItem) {
  menuItem.find('ul').toggle(200);
};

$(function() {
  var options = {
    menuDiv: $('[data-property="nav"]')
  };
  var dropDownMenu = new DropDownMenuHandler(options);
  dropDownMenu.init()
});
