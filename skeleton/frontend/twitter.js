const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(function () {
  let $buttons = $('button.follow-toggle');
  $buttons.each( (idx, btn) => {
    new FollowToggle(btn);
  });

  let $searches = $('.users-search');
  $searches.each( (idx, search) => {
    console.log(search);
    new UsersSearch(search);
  });

  $('.tweet-compose').each( (idx, form) => {
    new TweetCompose(form);
  });
});
