function BlogContentLoader(blogDataOptions) {
  this.blogListTitles = blogDataOptions.blogListTitles;
  this.dataUrl = blogDataOptions.dataUrl;
  this.dataBlogProperty = blogDataOptions.dataBlogProperty;
};

BlogContentLoader.prototype.init = function() {
  this.createContentHolders();
  this.setBlogListener();
};

BlogContentLoader.prototype.createContentHolders = function() {
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
  this.blogListTitles.on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    _this.loadContent($this.data('content'), $this.attr(_this.dataBlogProperty));
  });
};

BlogContentLoader.prototype.loadContent = function(contentHolder, blogId) {
  contentHolder.load(this.dataUrl + ' [' + this.dataBlogProperty + '=' + blogId + ']');
};

$(function() {
  var blogDataOptions = {
    blogListTitles: $('[data-property="blog"]').find('h3'),
    dataUrl: 'data/blog.html',
    dataBlogProperty: 'data-blog'
  }
  var blogContentLoader = new BlogContentLoader(blogDataOptions);
  blogContentLoader.init();
});
