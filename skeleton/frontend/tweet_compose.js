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

  handleSuccess(tweet) {

  }

  submit(e) {
    e.preventDefault();
    let val = this.$el.serializeJSON();
    this.$el.find(':input').prop('disabled', true);
    APIUtil.createTweet(val)
      .then((tweet) => this.handleSuccess(tweet));

  }
}

module.exports = TweetCompose;
