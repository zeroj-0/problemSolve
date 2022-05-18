$(function(){
  // console.log($("body .sub-title span").text());
  // console.log(window.location.href);
  // console.log($(location).attr("href"));

  /* 내가 한 부분
  let thisPageName = $("body .sub-title span").text();
  $("#lnb ul li a").each(function(){
    let lnbtitle = $(this).attr("href").split("/");
    lnbtitle = lnbtitle[lnbtitle.length-1].split(".");
    if ( thisPageName.toLowerCase() == lnbtitle[0] ) {
      $(this).addClass("on");
    }
  });
  */

 // 화면이 로드될때 한번만 실행하도록 변수에 할당해줌
  let currentHref = hrefFunc(location);

  $("#lnb a").each(function(){
    if ( hrefFunc(this) == currentHref ) {
      $(this).addClass("on");
    }
  });

  function hrefFunc(elem){
    let commonHref = $(elem).attr("href").split("/");
    commonHref = commonHref[commonHref.length-1].split(".");
    commonHref = commonHref[0];
    return commonHref;
  }

  $("dd:not(:first)").css({
    "display": "none",
    "height": 0
  });

    /* 아코디언. */

    $(".accordion dl dt").click(function(){
      let thisElem = $(this);
      if ( $("+dd",thisElem).css("display") == "none"){
        let isAni = $("dd").is(":animated");
        if ( !isAni ) {
          $("dd").each(function(){
              if(parseInt($(this).css("height")) == 300 ){
                $(this).animate({height: 0},200,function(){
                  $(this).css("display","none");
                });
              }
            });
            $("+dd",thisElem).css("display","block").animate({height: 300},1000);
        };
      }
    });
});
