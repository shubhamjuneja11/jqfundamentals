function HintProvider(searchField, searchLabel) {
  this.searchField = searchField;
  this.searchLabel = searchLabel;
}

HintProvider.prototype.init = function() {
  this.searchLabelText = this.searchLabel.text();
  this.searchField.val(this.searchLabel.text())
                  .addClass('hint');
  this.searchLabel.remove();
  this.setTextFocusListener();

};

HintProvider.prototype.setTextFocusListener = function() {
  var _this = this;
  this.searchField.focus(function() {
    $(this).val('').removeClass('hint');
  });

  this.searchField.blur(function() {
      $this = $(this);
      if ($this.val() === '') {
        $this.val(_this.searchLabelText).addClass('hint');
      }
    }
  );
};

$(function() {
  var searchField = $('[data-property="hint"]'),
    searchLabel = $('[data-property="search"]'),
    hintProvider = new HintProvider(searchField, searchLabel);
  hintProvider.init();
});
