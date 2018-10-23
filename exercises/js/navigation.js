function DropDownMenuHandler(menuDiv) {
  this.menu = $(menuDiv);
}

DropDownMenuHandler.prototype.init = function() {
  this.setMenuHover();
};

DropDownMenuHandler.prototype.setMenuHover = function() {
  var _this = this;
  this.menu.find('li').hover(function(event) {
    console.log('dddd');
    var hoveredMenu = $(event.target);
    console.log(hoveredMenu);
    hoveredMenu.addClass('selected');
  },
  function(event) {
    var hoveredMenu = $(event.target);
    hoveredMenu.removeClass('selected');
  }
  );
};
$(function() {
  var dropDownMenu = new DropDownMenuHandler('#nav');
  dropDownMenu.init()
});
