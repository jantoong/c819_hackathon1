class EventLog{
  constructor($element) {
    this.$element = $element;
  }
  append(message) {
    this.$element.append('<br>' + message);
    this.$element.scrollTop(this.$element[0].scrollHeight);
  }
  clear() {
    this.$element.empty();
  }
}
