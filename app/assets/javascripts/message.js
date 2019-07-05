$(function () {
  

  function buildHTML(message) {

    
  
    image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : ""; //三項演算子を使ってmessage.imageにtrueならHTML要素、faiseなら空の値を代入。

    var html = `<div class="message" data-message-id="${message.id}"> 
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-meesage">
            <p class="lower-message__content">
              ${message.content}
            </p>
            ${image}
          </div>
        </div>`
    return html;
  }
  

  // 自動更新はここから。 
  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){//今いるページのリンクが/groups/グループID/messagesのパスとマッチすれば以下を実行。
      var last_message_id = $('.message:last').data("message-id"); //dataメソッドで.messageにある:last最後のカスタムデータ属性を取得しlast_message_idに代入。

      

      $.ajax({ //ajax通信で以下のことを行う
        url: "api/messages", //サーバを指定。今回はapi/message_controllerに処理を飛ばす
        type: 'get', //メソッドを指定
        dataType: 'json', //データはjson形式
        data: {last_id: last_message_id} //飛ばすデータは先ほど取得したlast_message_id。またparamsとして渡すためlast_idとする。
      })
      .done(function (messages) { //通信成功したら、controllerから受け取ったデータ（messages)を引数にとって以下のことを行う
        
        var insertHTML = '';//追加するHTMLの入れ物を作る
        messages.forEach(function (message) {//配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          insertHTML = buildHTML(message); //メッセージが入ったHTMLを取得
          $('.messages').append(insertHTML);//メッセージを追加
        })
        // $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');//最新のメッセージが一番下に表示されようにスクロールする。
      })
      .fail(function () {
        alert('自動更新に失敗しました');//ダメだったらアラートを出す
      });
    }
  };
  setInterval(reloadMessages, 5000);//5000ミリ秒ごとにreloadMessagesという関数を実行し自動更新を行う。
  });


$(function() {
  function buildHTML(message){
    var image = ( message.image.url ? `<img src="${message.image.url}"></img>` : "" )
    

    var html = `<div class="message">
                  <div class="upper-message">
                      <div class="upper-message__user-name">
                          ${ message.user_name }
                      </div>
                      <div class="upper-message__date">
                          ${ message.time }
                      </div>
                  </div>
                  <div class="lower-message">
                      <p class="lower-message__content">
                          ${ message.content }
                      </p>
                      ${image}
                  </div>
              </div>`;
      return html;
  }
  
  function scroll() {
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
  }

      $("#new_message").on('submit', function(e) {
  
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');
        

        $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
        })

　    .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.form__submit').prop('disabled', false);
        scroll()
        $("#new_message")[0].reset();
      })  
      .fail(function(){
          alert('error')
          $('.form__submit').prop('disabled', false);
          })
      return false;
    });
  })

  

  