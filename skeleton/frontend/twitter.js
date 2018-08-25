const FollowToggle = require('./follow_toggle');

document.addEventListener('DOMContentLoaded', () => {
  let $buttons = $('button.follow-toggle');
  $buttons.each( (idx, el) => {
    new FollowToggle(el);
  });
});
