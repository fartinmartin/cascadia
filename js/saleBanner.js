export function saleBanner() {
  $('#btn-banner-close').click(function () {
    console.log("saleBanner.js is here!");
    $(this).parent().parent().addClass('banner-hidden', 300);
  });
}