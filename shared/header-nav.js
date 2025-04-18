function initMouseEvent(n, e) {
  n.find(e.item1).mouseover(function () {
    $(this).find(e.box2).stop().slideDown(200);
  });
  n.find(e.item1).mouseleave(function () {
    $(this).find(e.box2).hide().find(e.box3).hide();
  });
  n.find(e.item2).mouseover(function () {
    $(this).find(e.box3).stop().slideDown(200);
  });
  n.find(e.item2).mouseleave(function () {
    $(this).find(e.box3).hide();
  });
}

function initMouseEventOnMobile(i, n) {
  let isNavContentVisible = false;

  0 < i.find(n.content).length
    ? (i.find(n.openBtn).click(function () {
        if (!isNavContentVisible) {
          i.find(n.content).stop().slideDown(200);
        } else {
          i.find(n.content).hide().find(n.box2).hide().find(n.box3).hide();
          i.find(n.jtIcon).removeClass("p_jtHover");
        }

        isNavContentVisible = !isNavContentVisible;
      }),
      i.find(n.closeBtn).click(function () {
        i.find(n.content).hide().find(n.box2).hide().find(n.box3).hide(),
          i.find(n.jtIcon).removeClass("p_jtHover");
      }),
      i.find(n.jtIcon).click(function (i) {
        i.stopPropagation(),
          $(this).toggleClass("p_jtHover"),
          $(this).parent().next("ul").stop().slideToggle(200);
      }))
    : (i.find(n.openBtn).click(function () {
        i.find(n.box1).stop().slideDown(200), $(this).hide().siblings().show();
      }),
      i.find(n.closeBtn).click(function () {
        i.find(n.box1).hide().find(n.box2).hide().find(n.box3).hide(),
          i.find(n.jtIcon).removeClass("p_jtHover"),
          $(this).hide().siblings().show();
      }),
      i.find(n.item1).click(function () {
        $(this).find(n.jtIcon).hasClass("p_jtHover")
          ? $(this).find(n.jtIcon).removeClass("p_jtHover")
          : ($(this).find(n.jtIcon).eq(0).addClass("p_jtHover"),
            $(this).siblings().find(n.jtIcon).removeClass("p_jtHover")),
          $(this).find(n.box2).stop().slideToggle(200).find(n.box3).hide(),
          $(this).siblings().find(n.box2).hide().find(n.box3).hide();
      }),
      i.find(n.item2).click(function (i) {
        i.stopPropagation(),
          $(this).find(n.jtIcon).hasClass("p_jtHover")
            ? $(this).find(n.jtIcon).removeClass("p_jtHover")
            : ($(this).find(n.jtIcon).addClass("p_jtHover"),
              $(this).siblings().find(n.jtIcon).removeClass("p_jtHover")),
          $(this).find(n.box3).stop().slideToggle(200),
          $(this).siblings().find(n.box3).hide();
      }));
}

function isMobile() {
  return window.innerWidth <= 768;
}

function initNav() {
  const elem = $(".tat-nav");
  const config = {
    content: ".p_navContent",
    box1: ".p_level1Box",
    box2: ".p_level2Box",
    box3: ".p_level3Box",
    item1: ".p_level1Item",
    item2: ".p_level2Item",
    item3: ".p_level3Item",
    openBtn: ".p_openIcon",
    closeBtn: ".p_closeIcon",
    jtIcon: ".p_jtIcon",
  };

  isMobile()
    ? initMouseEventOnMobile(elem, config)
    : initMouseEvent(elem, config);
}

window.HeaderNav = { initNav };
