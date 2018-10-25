function BlogContentLoader(blogDataOptions) {
  this.blogData = blogDataOptions.blogData;
};

BlogContentLoader.prototype.init = function() {
  this.blogListTitles = this.blogData.find('h3');
  this.createContentHolders();
  this.setBlogListener();
};

BlogContentLoader.prototype.createContentHolders = function() {
  console.log('111');
  var _this = this;
  this.blogListTitles.each(function(index, value) {
    var listItem = $(value),
      contentHolder = $('<div>');
    listItem.data('content', contentHolder);
    listItem.append(contentHolder);
  });
};

BlogContentLoader.prototype.setBlogListener = function() {
  var _this = this;
  this.blogData.on('click','h3',function(event) {
    event.preventDefault();
    _this.loadContent();
  });
};

BlogContentLoader.prototype.loadContent = function() {
  console.log('111111');
  $.ajax({
    url:'data/blog.html'
  })
  .done(function(response) {
    console.log('2222');
  })
  .fail(function(error) {
    console.log('33333');
  });
  $('div [data-blog]').load('data/blog.html',function(response){
    console.log(response);
  });
};

$(function() {
  var blogDataOptions = {
    blogData: $('[data-property="blog"]')
  }
  var blogContentLoader = new BlogContentLoader(blogDataOptions);
  blogContentLoader.init();
});
