function BlogContentLoader(blogDataOptions) {
  this.blogData = blogDataOptions.blogData;
  this.dataUrl = blogDataOptions.dataUrl;
  this.dataBlogProperty = blogDataOptions.dataBlogProperty;
};

BlogContentLoader.prototype.init = function() {
  this.blogListTitles = this.blogData.find('h3');
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
  this.blogData.on('click', 'h3', function(event) {
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
    blogData: $('[data-property="blog"]'),
    dataUrl: 'data/blog.html',
    dataBlogProperty: 'data-blog'
  }
  var blogContentLoader = new BlogContentLoader(blogDataOptions);
  blogContentLoader.init();
});
