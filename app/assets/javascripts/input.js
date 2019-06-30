$(function() {

  var search_list = $("#user-search-result");
  var member_list = $("#member_search_result");

  function appendUsers(user) {
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ user.name }</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name=${ user.name }>追加</a>
              </div>`

　　 search_list.append(html);
    return html;
   }

  function appendMembers(name, user_id) {
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value=${ user_id }>
                <p class='c hat-group-user__name'>${ name }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
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
        $(this).parent().remove();
        appendMembers(name, user_id);
      });

　    $(document).on("click", '.user-search-remove', function() {
        $(this).parent().remove();
      });
    });
  });
});


// $(function() { 

// var user_seach = $(".user-search-result");

// function user_search_field(users) {
//      var html =  `<div class="chat-group-user clearfix">
//      <p class="chat-group-user__name">ユーザー名</p>
//      <div class="user-seach-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
//    </div>`
//    user_seach(html);
//  }

// $(function() {
//   $("#user-search-field").on("keyup", function() {
//     var input = $(this).val();
//      console.log(input)
//     $.ajax({
//       type: 'GET',
//       url: '/users',
//       data: { keyword: input },
//       dataType: 'json'
//     })
  

//     .done(function(users) {
//       $("user-search-field").empty();
//       if (users.length !== 0) {
//         user.forEach(function(users){
//           user-seach-addEventListener(users);
//          (user);
//       });
//      }
//       else {
//         console.log("ユーザー検索に失敗");
//       }
//     })
//   });
// });