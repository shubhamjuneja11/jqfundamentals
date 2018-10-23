function BlogToggler(blog) {
  this.blog = $(blog);
}

BlogToggler.prototype.init = function() {
  this.setToggler();
};

BlogToggler.prototype.setToggler = function() {
  var _this = this;
  this.blog.on('click', function(event) {
    event.preventDefault();
    var clickedList = $(event.target);
    var selectedList = clickedList.closest('li').find('.excerpt');
    // Open clicked paragraph
    selectedList.slideDown();
    if (_this.selectedList) {
      // Close previous paragraph
      _this.selectedList.slideUp();
    }
    // Set clicked as current paragraph
    _this.selectedList = selectedList;
  });
};

var blogToggler = new BlogToggler('#blog');
blogToggler.init();
