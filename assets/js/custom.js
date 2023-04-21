// $(function () {
//     var toc = $('#toc');
//     var tocTop = toc.offset().top;
//     $(window).scroll(function () {
//         toc.toggleClass('fixed', $(window).scrollTop() > tocTop);
//         var scrollPosition = $(window).scrollTop();
//         $('div[id^="section"]').each(function () {
//             var targetPosition = $(this).offset().top;
//             if (scrollPosition >= targetPosition - 50) {
//                 alert('test');
//                 var targetId = $(this).attr('id');
//                 $('#toc li').removeClass('active');
//                 $('#toc li a[href="#' + targetId + '"]').parent().addClass('active');
//             }
//         });
//     });
// });

function updateTOC() {
    const headings = document.querySelectorAll("article h1, article h2, article h3, article h4, article h5, article h6");
    const tocLinks = document.querySelectorAll(".mainTOC a");
    const activeClass = "active";
    let activeLink;
  
    for (const link of tocLinks) {
      const heading = document.getElementById(link.getAttribute("href").slice(1));
  
      if (heading) {
        const headingRect = heading.getBoundingClientRect();
  
        if (headingRect.top <= 20 && headingRect.top + headingRect.height > 0) {
          link.classList.add(activeClass);
          activeLink = link;
        } else {
          link.classList.remove(activeClass);
        }
      }
    }
  
    if (activeLink) {
      const tocRect = document.querySelector("#toc").getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();
  
      if (activeLinkRect.top < tocRect.top) {
        document.querySelector("#toc").scrollTop -= tocRect.top - activeLinkRect.top + 10;
      } else if (activeLinkRect.bottom > tocRect.bottom) {
        document.querySelector("#toc").scrollTop += activeLinkRect.bottom - tocRect.bottom + 10;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    updateTOC();
    alert('DOMContentLoaded');
    document.addEventListener("scroll", updateTOC);
    window.addEventListener("resize", updateTOC);
  });