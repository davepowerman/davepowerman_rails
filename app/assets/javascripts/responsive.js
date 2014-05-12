$(document).on('ready',function() {

    // header toggle buttons
    var revealTime = 0;
    
    document.getElementById("nav-container").style.display = "none";
    document.getElementById("nav-main").style.display = "none";
    
    $('#nav-toggle-btn').unbind('click').click(function() {
      if(event.detail==1){
        //$('#nav-container').slideToggle(revealTime);
        //$('#nav-main').slideToggle(revealTime);
        console.log($('#nav-container').css('display'));
        if($('#nav-container').css('display') != 'flex'){ 
          $('#nav-container').css('display','flex');
          $('#nav-main').css('display','flex');
        }else{
          $('#nav-container').css('display','none');
          $('#nav-main').css('display','none');
        }
      }
    });
    
    $('#user-toggle-btn').unbind('click').click(function() {
      if(event.detail==1){
        //$('#nav-container').slideToggle(revealTime);
        //$('#nav-main').slideToggle(revealTime);
        console.log($('#nav-container').css('display'));
        if($('#nav-user').css('display') != 'flex'){ 
          $('#nav-user').css('display','flex');
          $('#nav-main').css('display','none');
        }else{
          $('#nav-user').css('display','none');
          $('#nav-main').css('display','flex');
        }
      }
    });
    
    /*$('#user-toggle-btn').click(function() {
      //$('#nav-main').slideToggle(revealTime);
      //$('#nav-user').slideToggle(revealTime);
      $('#nav-container aside').hide();
      $('#nav-container aside').fadeIn(0);
    });*/
    
    var swipePercentage = 0.90;
    var swipeTime = 300
    
    /*$('#content .scroll-vertical').on('swipeleft', function(event) {
      $(this).animate({
        scrollLeft: $(this).scrollLeft()+($(this).find('.content-column').width())*swipePercentage
      },swipeTime);
    });
    
    $('#content .scroll-vertical').on('swiperight', function(event) {
      $(this).animate({
        scrollLeft: $(this).scrollLeft()-($(this).find('.content-column').width())*swipePercentage
      },swipeTime);
    });*/
});
