$(document).ready(function() {
  $(".header__toggleButton").click(function() {
    event.stopPropagation();
    $(".header__list").toggleClass("open");
  });

  $(".header__item a").click(function() {
    $(".header__list").removeClass("open");
  });

  $("body").click(function() {
    if ($(".header__list").hasClass("open"))
      $(".header__list").removeClass("open");
  });

  $(".multi-item-carousel .item").each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next
      .children(":first-child")
      .clone()
      .appendTo($(this));

    if (next.next().length > 0) {
      next
        .next()
        .children(":first-child")
        .clone()
        .appendTo($(this));
    } else {
      $(this)
        .siblings(":first")
        .children(":first-child")
        .clone()
        .appendTo($(this));
    }
  });
});
