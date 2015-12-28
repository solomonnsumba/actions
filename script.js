var template = function(list) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + list[0] + " "+"Task:"+list[1]+'</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
  	  var list = []; 
      var todo = $("#todo").val(); 
      list.push(todo); 

      var todo2 = $("#todo2").val(); 
      list.push(todo2); 
      var html = template(list);
      $(".list").append(html);

    return false;  
  });

 

  $(document).on('click','.glyphicon-star',function(){
  $(this).toggleClass('active');
  
  });
   $(document).on('click','.glyphicon-remove',function(){  
     var a = $(this).parent();
     $(a).remove();      
  
  });

    $(document).on("click", '.hidden', function() {
     var div=this.getElementById('comment');
     div.className='visible';
    });
  
};

$(document).ready(main);