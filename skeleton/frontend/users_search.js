class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $.$el.find('input[name=username]');
    this.$ul = $(el.ul);
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(e) {

  }

  render() {

  }
}
