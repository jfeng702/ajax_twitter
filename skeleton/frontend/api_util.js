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
  searchUsers: (queryVal, success) => (
    $.ajax({
      method: 'GET',
      url: `/users/search`,
      dataType: 'json',
      data: {}
    })
  )
};

module.exports = APIUtil;
