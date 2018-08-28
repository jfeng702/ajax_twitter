const APIUtil = require ('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('ul.users');
    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(e) {
    APIUtil.searchUsers(this.$input.val())
      .then((results) => this.renderResults(results));
  }

  renderResults(users) {
    this.$ul.empty();

    users.forEach(result => {
      const user = result;
      console.log(user);

      let $a = $('<a></a>');
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      let $li = $('<li></li>').append($a);
      let $followToggle = $('<button></button>');
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: user.followed ? 'followed' : 'unfollowed'
      });
      this.$ul.append($li);
      this.$ul.append($followToggle);
    });
  }
}

module.exports = UsersSearch;
