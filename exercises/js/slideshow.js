function SlideShow(slidesContainer, slidesContent) {
  this.slidesContainer = slidesContainer;
  this.slidesContent = slidesContent;
};

SlideShow.prototype.init = function() {
  this.slidesContent = this.slidesContainer.find(this.slidesContent);
  this.slidesCount = this.slidesContent.length;
  this.createSlider();
  this.startSlideShow();
};

SlideShow.prototype.createSlider = function() {
  var images = this.slidesContainer.find(this.slidesContent);
  this.slider = $('<div id=slider>');
  this.appendClonedData(images);
  this.slides = this.slider.find('img');
  this.createImageCounter();
  $('body').prepend(this.slider);
};

SlideShow.prototype.createImageCounter = function() {
  this.imageCounter = $('<div>');
  this.slider.append(this.imageCounter);
};

SlideShow.prototype.appendClonedData = function(data) {
  var _this = this;
  data.each(function(index, oldData) {
    var clonedData = $(oldData).clone();
    _this.modifyData(clonedData);
    _this.slider.append(clonedData);
  });
};

SlideShow.prototype.modifyData = function(data) {
  data.hide();
};

SlideShow.prototype.startSlideShow = function() {
  this.showSlide(0);
}

SlideShow.prototype.showSlide = function(slideCount) {
  var slideIndex = slideCount % this.slidesCount,
    _this = this;
  this.startSlidesAnimation(slideIndex);
  setTimeout(function() { _this.showSlide(slideIndex + 1); }, 1000);
};

SlideShow.prototype.startSlidesAnimation = function(currentSlideIndex) {
  var _this = this,
    previousSlideIndex = this.getPreviousSlideIndex(currentSlideIndex);
  $(this.slides[previousSlideIndex]).fadeOut(100, function() {
    $(_this.slides[currentSlideIndex]).fadeIn(100);
    _this.setImageCounter(currentSlideIndex + 1);
  });
};

SlideShow.prototype.getPreviousSlideIndex = function(currentSlideIndex) {
  return (currentSlideIndex == 0 ? this.slidesCount - 1 : currentSlideIndex - 1);
};

SlideShow.prototype.setImageCounter = function(currentImage) {
  this.imageCounter.html(currentImage + '/' + this.slidesCount);
};

$(function() {
  var slideShow = new SlideShow($('[data-property="slideshow"]'), 'img');
  slideShow.init();
});
