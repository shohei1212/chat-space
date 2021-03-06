$(function() {

  var search_list = $("#user-search-result");
  var member_list = $("#member_search_result");
  var users_list = []

  function appendUsers(user) {
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ user.name }</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name=${ user.name }>追加</a>
              </div>`

    users_list.forEach(function(member_id){
      if (member_id === user.id){
        html = ""
      }
    })

　　 search_list.append(html);
    // return html;
   }

  function appendMembers(name, user_id) {
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value=${ user_id }>
                <p class='chat-group-user__name'>${ name }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id="${ user_id }">削除</a>
              </div>`

　　 member_list.append(html);
  }

  function appendNoUsers(info) {
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ info }</p>
              </div>`

    search_list.append(html);
  }

  $(function(){
    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();

      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(users) {
        $("#user-search-result").empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendUsers(user);
            });
          }
          else {
            appendNoUsers("一致するユーザーはいません");
          }
        })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    });

    $(function(){
      $(document).on('click', '.user-search-add', function() {
        var name = $(this).data("user-name");
        var user_id = $(this).data("user-id");
        users_list.push(user_id)
        // console.log(users)
        $(this).parent().remove();
        appendMembers(name, user_id);
        $.ajax({
          type: 'GET',
          url: '/users',
          data: {user_id: users}, 
          dataType: 'json'
        })
        .done(function(users){
          // console.log(users)
        })
      });

　    $(document).on("click", '.user-search-remove', function() {
        var user_id = $(this).data("user-id");
        console.log(user_id)
        for(i = 0; i < users_list.length; i++){
          if(users_list[i] == user_id){
            users_list.splice(i--,1);
          }
        }
        $(this).parent().remove();
      });
    });
  });
});