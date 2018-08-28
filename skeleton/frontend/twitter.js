const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');


$(function () {
  let $buttons = $('button.follow-toggle');
  $buttons.each( (idx, btn) => {
    new FollowToggle(btn);
  });

  let $searches = $('.users-search');
  $searches.each( (idx, search) => {
    new UsersSearch(search);
  });
});
