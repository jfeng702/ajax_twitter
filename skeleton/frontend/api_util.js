const APIUtil = {
  followUser: id => (
    $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  ),
  unfollowUser: id => (
    $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  ),
  searchUsers: (query, success) => (
    $.ajax({
      method: 'GET',
      url: `/users/search`,
      dataType: 'json',
      data: { query },
      success
    })
  ),
  createTweet: data => (
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data,
      dataType: 'json'
    })
  )
};

module.exports = APIUtil;
