class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === 'unfollowed') {
      return 'Follow!';
    } else if (this.followState === 'followed') {
      return 'Unfollow!';
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.followState === 'unfollowed') {
      this.followState = 'unfollowing';
      this.render();

      $.ajax({
        action: 'POST',
        url: `users/${this.userId}/follow`,
        data: { user_id: `${this.userId}`},
        dataType: 'json'
      })
        .then(() => {
          this.followState = 'unfollowed';
          this.render();
        });
    } else if (this.followState === 'unfollowed'){
      this.followState = 'following';
      this.render();
      $.ajax({
        action: 'DELETE',
        url: `users/${this.userId}/follow`,
        dataType: 'json',
        success: this.toggle
      })
        .then(() => {
          this.followState = 'followed';
          this.render();
        });
    }
  }
}

module.exports = FollowToggle;
