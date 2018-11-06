function SlideShow(slideShowOptions) {
  this.imagesContainer = slideShowOptions.imagesContainer;
  this.slides = [];
};

SlideShow.prototype.init = function() {
  this.initializeData();
  this.createSlider();
  this.startSlideShow();
};

SlideShow.prototype.initializeData = function() {
  this.images = this.imagesContainer.find('img');
  this.slidesCount = this.images.length;
};

SlideShow.prototype.createSlider = function() {
  this.slider = $('<div id=slider>');
  this.appendClonedImages(this.images);
  this.createImageCounter();
  this.prependToBody(this.slider);
};

SlideShow.prototype.prependToBody = function(container) {
  $('body').prepend(container);
};

SlideShow.prototype.createImageCounter = function() {
  this.imageCounter = $('<div>');
  this.slider.append(this.imageCounter);
};

SlideShow.prototype.appendClonedImages = function() {
  var _this = this;
  this.images.each(function(index, image) {
    var clonedImage = $(image).clone();
    _this.modifyImage(clonedImage);
    _this.slider.append(clonedImage);
    _this.slides.push(clonedImage);
  });
};

SlideShow.prototype.modifyImage = function(image) {
  image.hide();
};

SlideShow.prototype.startSlideShow = function() {
  this.showSlide(0);
}

SlideShow.prototype.showSlide = function(slideCount) {
  var slideIndex = slideCount % this.slidesCount,
    _this = this;
  this.startSlidesAnimation(slideIndex);
};

SlideShow.prototype.startSlidesAnimation = function(currentSlideIndex) {
  var _this = this,
    previousSlideIndex = this.getPreviousSlideIndex(currentSlideIndex);
  $(this.slides[previousSlideIndex]).fadeOut(1000, function() {
    $(_this.slides[currentSlideIndex]).fadeIn(1000, function() {
      _this.showSlide(currentSlideIndex + 1);
    });
    _this.setImageCounter(currentSlideIndex + 1);
  });
};

SlideShow.prototype.getPreviousSlideIndex = function(currentSlideIndex) {
  return (currentSlideIndex == 0 ? this.slidesCount - 1 : currentSlideIndex - 1);
};

SlideShow.prototype.setImageCounter = function(currentImage) {
  this.imageCounter.text(currentImage + '/' + this.slidesCount);
};

$(function() {
  var slideShowOptions = {
    imagesContainer: $('[data-property="slideshow"]'),
  };
  var slideShow = new SlideShow(slideShowOptions);
  slideShow.init();
});
