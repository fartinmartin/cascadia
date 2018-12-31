export function dropdown() {
  console.log("dropdown.js is here!");

  $("nav li a").hover(
    // use the data attr of this <a> to reveal
    // the .dropdown with the same id
    function () {
      var category = $(this).attr("data-menu-category");
      $(".dropdown").removeClass("dropdown--active");
      $(".dropdown#" + category).addClass("dropdown--active")
      // dim all other nav <a> tags
      $(this).removeClass("menu-item--not-active");
      $(this)
        .parent()
        .siblings()
        .children()
        .addClass("menu-item--not-active");
    }
  );

  $(".dropdown").on("mouseleave", function () {
    $(".dropdown").removeClass("dropdown--active");
    // hold "menu-item--not-active" for other
    // menu items until mouse exits dropdown
    var category = $(this).attr("id");
    var menuItem = $("[data-menu-category=" + category + "]");
    menuItem
      .parent()
      .siblings()
      .children()
      .removeClass("menu-item--not-active");
  });

  $("#btn-search").hover( function () {
    $(this).removeClass("menu-item--not-active")
    $("nav a").addClass("menu-item--not-active")
  });
}