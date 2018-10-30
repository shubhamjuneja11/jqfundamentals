function SpecialDay(specialDayOptions) {
  this.specialDayContent = specialDayOptions.specialDayContent;
  this.requestUrl = specialDayOptions.requestUrl;
  this.submitButton = specialDayOptions.submitButtonSelector;
  this.optionsSelector = specialDayOptions.optionsSelector;
};

SpecialDay.prototype.init = function() {
  this.removeSubmitbutton();
  this.$daysOptions = this.specialDayContent.find(this.optionsSelector);
  this.$daysContentHolder = $('<div>');
  this.$daysOptions.after(this.$daysContentHolder);
  this.dayChangedHandler();
  this.sendAjaxRequest();
};

SpecialDay.prototype.dayChangedHandler = function() {
  var _this = this;
  this.$daysOptions.change(function() {
    _this.selectedDay = $(this).val();
    _this.setSpecialDayData();
  });
};

SpecialDay.prototype.sendAjaxRequest = function() {
  var _this = this;
  $.ajax({
    url: _this.requestUrl,
    dataType: "json"
  }).done(function(json) {
    _this.setData(json);
  });
};

SpecialDay.prototype.setData = function(json) {
  this.specialDaysData = json;
};

SpecialDay.prototype.getSelectedDayData = function() {
  return (this.specialDaysData[this.selectedDay]);
};

SpecialDay.prototype.setSpecialDayData = function() {
  if (this.selectedDay) {
    this.$daysContentHolder.text(this.getSelectedDayData()['title']);
  } else {
    this.$daysContentHolder.text('');
  }
};

SpecialDay.prototype.removeSubmitbutton = function() {
  this.specialDayContent.find(this.submitButton).remove();
};

$(function() {
  var specialDayOptions = {
    specialDayContent: $('[data-property=specials]'),
    requestUrl: 'data/specials.json',
    submitButtonSelector: '[data-property=buttons]',
    optionsSelector: 'form select[data-property="day"]'
  };
  var specialDay = new SpecialDay(specialDayOptions);
  specialDay.init();
});
