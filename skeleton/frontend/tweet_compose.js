const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$form = this.$el.find('form');
    this.$input = this.$el.find('textarea[name=tweet\\[content\\]]');
    this.$input.on('input', this.handleInput.bind(this));

    this.$el.on('submit', this.submit.bind(this));
  }

  handleInput(e) {

  }

  handleSuccess(data) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));
    const $li = $('<li></li>');
    $li.text = data;
    $tweetsUl.append($li);
    this.clearInput();
  }

  clearInput() {
    this.$input.val('');
    this.$el.find(':input').prop('disabled', false);

  }

  submit(e) {
    e.preventDefault();
    let val = this.$el.serializeJSON();
    console.log(val);
    this.$el.find(':input').prop('disabled', true);
    APIUtil.createTweet(val)
      .then((data) => this.handleSuccess(data));
  }
}

module.exports = TweetCompose;
