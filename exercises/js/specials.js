function SpecialDay(specialDayOptions) {
  this.specialDayContent = specialDayOptions.specialDayContent;
  this.requestUrl = specialDayOptions.requestUrl;
  this.submitButton = specialDayOptions.submitButtonSelector;
  this.optionsSelector = specialDayOptions.optionsSelector;
};

SpecialDay.prototype.init = function() {
  this.daysSelector = this.specialDayContent.find(this.optionsSelector);
  this.daysOptions = this.daysSelector.find('option');
  this.daysContentHolder = $('<div>');
  this.daysSelector.after(this.daysContentHolder);
  this.dayChangedHandler();
  this.removeSubmitbutton();
};

SpecialDay.prototype.dayChangedHandler = function() {
  var _this = this;
  this.daysSelector.change(function() {
    _this.selectedDay = $(this).val();
    _this.loadSpecialDayData();
  });
};

SpecialDay.prototype.loadSpecialDayData = function() {
  if (!this.specialDaysData) {
    this.specialDaysData = this.sendAjaxRequest();
  } else {
    this.setSpecialDayData();
  }
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
  this.setSpecialDayData();
};

SpecialDay.prototype.getSelectedDayData = function() {
  return (this.specialDaysData[this.selectedDay]);
};

SpecialDay.prototype.setSpecialDayData = function() {
  if (this.selectedDay) {
    this.daysContentHolder.text(this.getSelectedDayData()['title']);
  } else {
    this.daysContentHolder.text('');
  }
};

SpecialDay.prototype.removeSubmitbutton = function() {
  this.specialDayContent.find(this.submitButton).remove();
};

$(function() {
  var specialDayOptions = {
    specialDayContent: $('#specials'),
    requestUrl: 'data/specials.json',
    submitButtonSelector: '.buttons',
    optionsSelector: 'form select[name="day"]'
  };
  var specialDay = new SpecialDay(specialDayOptions);
  specialDay.init();
});
