$(function() {

function user_seach_add(users) {
     var html =  <div class="chat-group-user clearfix">
     <p class="chat-group-user__name">ユーザー名</p>
     <div class="user-seach-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
   </div>
}

$(function() {
  $(".chat-group-form__input").on("keyup", function() {
    var input = $(".chat-group-form__input").val();
    
    $.ajax({
      type: 'GET',
      url: '/user',
      data: { keyword: input },
      dataType: 'json'
    })
    
    .done(function(users) {
      $("user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(users){
          user-seach-add(users);
        });
      }
      else {
        appendErrMsgToHTML("ユーザー検索に失敗しました");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});
