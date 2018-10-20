function HintProvider(searchField, searchLabel) {
  this.searchField = searchField;
  this.searchLabel = searchLabel;
}

HintProvider.prototype.init = function() {
  this.searchLabelText = this.searchLabel.text();
  this.searchField.val(this.searchLabel.text());
  this.searchField.addClass('hint');
  this.searchLabel.remove();
  this.setTextFocusListener();

};

HintProvider.prototype.setTextFocusListener = function() {
  var _this = this;
  this.searchField.on({
    focus: function() {
      $(this).val('').removeClass('hint');
    },
    blur: function() {
      $this = $(this);
      if ($this.val() === ('')) {
        $this.val(_this.searchLabelText).addClass('hint');
      }
    }
  });
};

var searchField = $('.hint');
var searchLabel = $('#search label[for="q"]');
var hintProvider = new HintProvider(searchField, searchLabel);
hintProvider.init();
