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
    selectedList.slideToggle();
    if (_this.selectedList && !_this.compareList(selectedList, _this.selectedList)) {
      // Close previous paragraph
      _this.selectedList.slideUp();
    }
    // Set clicked as current paragraph
    _this.selectedList = selectedList;
  });
};

BlogToggler.prototype.compareList = function(list1, list2){
  return (this.getListName(list1) === this.getListName(list2));
};

BlogToggler.prototype.getListName = function(list) {
  return list.siblings('h3').find('a').html();
};

$(function() {
  var blogToggler = new BlogToggler('[data-property="blog"]');
  blogToggler.init();
});
