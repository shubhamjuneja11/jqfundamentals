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
    _this.toggleList(clickedList);
  });
};

BlogToggler.prototype.toggleList = function(clickedList) {
  selectedList = clickedList.closest('li').find('.excerpt');
  // Open clicked paragraph
  selectedList.slideToggle();
  this.closePreviousList();
  // Set clicked as current paragraph
  this.selectedList = selectedList;
};

BlogToggler.prototype.closePreviousList = function() {
  if (this.selectedList && !this.compareList(selectedList, this.selectedList)) {
    // Close previous paragraph
    this.selectedList.slideUp();
  }
};

BlogToggler.prototype.compareList = function(list1, list2) {
  return (this.getListDataBlog(list1) === this.getListDataBlog(list2));
};

BlogToggler.prototype.getListDataBlog = function(list) {
  return list.closest('li').attr('data-blog');
};

$(function() {
  var blogToggler = new BlogToggler('[data-property="blog"]');
  blogToggler.init();
});
