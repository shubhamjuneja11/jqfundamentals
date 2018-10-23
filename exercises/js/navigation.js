function DropDownMenuHandler(menuDiv) {
  this.menu = $(menuDiv);
}

DropDownMenuHandler.prototype.init = function() {
  this.setMenuHover();
};

DropDownMenuHandler.prototype.setMenuHover = function() {
  var _this = this;
  this.menu.find('li').hover(function(event) {
      var hoveredMenu = $(event.target);
      // Change color of hovered item
      hoveredMenu.addClass('hover');
      // Open submenu
      _this.toggleDropDown(hoveredMenu);
    },
    function(event) {
      var hoveredMenu = $(event.target);
      hoveredMenu.removeClass('hover');
      // Close submenu
      _this.toggleDropDown(hoveredMenu);
    }
  );
};

DropDownMenuHandler.prototype.toggleDropDown = function(menuItem) {
  menuItem.find('ul').toggle(200);
};

$(function() {
  var dropDownMenu = new DropDownMenuHandler('#nav');
  dropDownMenu.init()
});
