const FollowToggle = require('./follow_toggle');



$(function () {
  let $buttons = $('button.follow-toggle');
  $buttons.each( (idx, el) => {
    new FollowToggle(el);
  });
});
