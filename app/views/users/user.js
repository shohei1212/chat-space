$("#new_message").on('submit', function(e) {   
  e.preventDefault();   
  var formData = new FormData(this)   
  var url = $(this).attr('action');     
  
  $.ajax({   
  url: user,   
  type: "GET",   
  data: {keyword: input},   
  dataType: 'json',   
  processData: false,   
  contentType: false   
  }) 
})