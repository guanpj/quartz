$(function() {
    var toc = $('#toc');
    var tocTop = toc.offset().top;
    $(window).scroll(function() {
      toc.toggleClass('fixed', $(window).scrollTop() > tocTop);
      var scrollPosition = $(window).scrollTop();
      $('div[id^="section"]').each(function() {
        var targetPosition = $(this).offset().top;
        if (scrollPosition >= targetPosition - 50) {
          var targetId = $(this).attr('id');
          $('#toc li').removeClass('active');
          $('#toc li a[href="#' + targetId + '"]').parent().addClass('active');
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var toc = document.querySelector('.mainTOC details');
    toc.setAttribute('open', '');
  });