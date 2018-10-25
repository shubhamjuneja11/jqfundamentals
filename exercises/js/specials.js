function SpecialDay(specialDayOptions) {
  this.specialDayContent = specialDayOptions.specialDayContent;
  this.requestUrl = specialDayOptions.requestUrl;
};

SpecialDay.prototype.init = function() {
  console.log(this.specialDayContent);
  this.days = this.specialDayContent.find('form select[name="day"]');
  console.log(this.days);
  this.daysOptions = this.days.find('option');
  this.daysContentHolder = $('<div>');
  this.days.append(this.daysContentHolder);
  this.dayChangedHandler();
};

SpecialDay.prototype.dayChangedHandler = function() {
  var _this = this;
  this.days.change(function() {
    console.log('11111');
    this.selectedDay = $(this).val();
    console.log(this.selectedDay);
    _this.loadSpecialDayData();
  });
};

SpecialDay.prototype.loadSpecialDayData = function() {
  if (!this.specialDaysData) {
    this.specialDaysData = this.sendAjaxRequest();
  }
};

// SpecialDay.prototype.loadSpecialDayData = function() {
//   //var data =
// };

SpecialDay.prototype.sendAjaxRequest = function() {
  var _this = this;
  $.ajax({
    url: _this.requestUrl,
    dataType: "json"
  }).done(function(json){
    _this.setData(json);
  });
};

SpecialDay.prototype.setData = function(json) {
  this.specialDaysData = this.getSelectedDayData(json);
  this.setSpecialDayData();
};

SpecialDay.prototype.getSelectedDayData = function(json) {
  console.log(this.selectedDay);
  console.log(json[this.selectedDay]);
};

SpecialDay.prototype.setSpecialDayData = function() {

};

$(function() {
  var specialDayOptions = {
    specialDayContent: $('#specials'),
    requestUrl: 'data/specials.json'
  };
  var specialDay = new SpecialDay(specialDayOptions);
  specialDay.init();
});
