burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class-resp');
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');


}
)
var volopt = {
    ticker: function (items, tickerElement, container, containerWidth) {
      var arr = [],
          tickerWidth = 0,
          anim = function () {
            var dist = $(tickerElement).css("margin-left");
            dist = Number(dist.substring(0, dist.length - 2));
            $(tickerElement).animate(
              {"margin-left": "-=" + (dist + tickerWidth) + "px"},
              {
                queue: false,
                duration: (containerWidth + tickerWidth) * 30,
                easing: "linear",
                complete: function () {
                  $(tickerElement).css("margin-left", containerWidth + "px");
                  anim();
                }
              }
            );
          };
      $(container).width(containerWidth);
      $(container).css("overflow", "hidden");
      $(container).hover(
        function () {
          $(tickerElement).stop();
        }, 
        function () {
          anim();
        }
      );
      $(items).each(function (i, e) {
        arr[i] = $(this).html().trim();
      });
      $(tickerElement).html(arr.join(" ••• "));
      tickerWidth = $(tickerElement).width();
      $(tickerElement).css("margin-left", containerWidth + "px");
      anim();
    }
  };
  
  $(function () {
    volopt.ticker($('ul#newslist li.newsitem'),
                  $('span#newsTicker'),
                  $('div#newsContainer'),
                  500);
  });