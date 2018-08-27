class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('ul.users');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(e) {

  }

  render() {

  }
}
