// tem
$(".tabs").each(function (index, element) {
  const btn = $(this).find(".tabs-nav a");
  const content = $(this).find(".tabs-content");

  btn.on("click", function (e) {
    e.preventDefault();
    const t = $(this);
    let target = $(this).attr("href");
    target = target.replace("#", "");

    if (!$(this).hasClass("active")) {
      t.parent().siblings().find("a").removeClass("active");
      t.addClass("active");

      content.find(".tab-common").removeClass("active");
      content.find("." + target).addClass("active");

      // console.log(target);
    }
  });
});
