function SlideShow(slideShowOptions) {
  this.imagesContainer = slideShowOptions.imagesContainer;
};

SlideShow.prototype.init = function() {
  this.images = this.imagesContainer.find('img');
  this.slidesCount = this.images.length;
  this.createSlider();
  this.startSlideShow();
};

SlideShow.prototype.createSlider = function() {
  this.slider = $('<div id=slider>');
  this.appendClonedImages(this.images);
  this.slides = this.slider.find('img');
  this.createImageCounter();
  $('body').prepend(this.slider);
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
