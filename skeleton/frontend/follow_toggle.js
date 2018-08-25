const APIUtil = require('./api_util');
class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    switch (this.followState) {
      case 'followed':
        this.$el.prop('disabled', false);
        this.$el.html('Unfollow!');
        break;
      case 'unfollowed':
        this.$el.prop('disabled', false);
        this.$el.html('Follow!');
        break;
      case 'following':
        this.$el.prop('disabled', true);
        this.$el.html('Following...');
        break;
      case 'unfollowing':
        this.$el.prop('disabled', true);
        this.$el.html('Unfollowing...');
        break;
    }
  }

  handleClick(e) {
    const followToggle = this;
    e.preventDefault();
    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      console.log(this.userId);
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          console.log(this);
          followToggle.followState = 'unfollowed';
          followToggle.render();
        });
    } else if (this.followState === 'unfollowed'){
      this.followState = 'following';
      this.render();
      $.ajax({
        method: 'POST',
        url: `/users/${this.userId}/follow`,
        dataType: 'json'
      })
      .then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
    }
  }
}

module.exports = FollowToggle;
