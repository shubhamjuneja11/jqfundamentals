function SlideShowCreator(slidesDiv, slidesContentType) {
  this.slidesDiv = $(slidesDiv);
  this.slidesContentType = slidesContentType;
};

SlideShowCreator.prototype.init = function() {
  this.slidesContent = this.slidesDiv.find(this.slidesContentType);
  this.slidesCount = this.slidesContent.length;
  this.createSlider();
  this.startSlideShow();
};

SlideShowCreator.prototype.createSlider = function() {
  var images = this.slidesDiv.find(this.slidesContentType),
    slider = $('<div id=slider>'),
    firstImage = true;
  images.each(function(index, oldimage) {
    var image = $(oldimage).clone();
    if (!firstImage)
      image.hide();
    else
      firstImage = false;
    slider.append(image);
  });
  this.slides = slider.find('img');
  this.imageCounter = $('<div>');
  slider.append(this.imageCounter);
  $('body').prepend(slider);
};

SlideShowCreator.prototype.startSlideShow = function() {
  this.showSlide(0);
}

SlideShowCreator.prototype.showSlide = function(slideCount) {
  var slideIndex = slideCount % this.slidesCount,
    slideOutIndex = slideIndex == 0 ? this.slidesCount - 1 : slideIndex - 1,
    slides = this.slides,
    _this = this;
  $(slides[slideOutIndex]).fadeOut(100, function() {
    $(slides[slideIndex]).fadeIn(100);
    _this.setImageCounter(slideIndex+1);
  });
  setTimeout(function() { _this.showSlide(slideIndex + 1); }, 1000);
};

SlideShowCreator.prototype.setImageCounter = function(currentImage) {
  this.imageCounter.html(currentImage + '/' + this.slidesCount);
};

$(function() {
  var slideShow = new SlideShowCreator('#slideshow', 'img');
  slideShow.init();
});
