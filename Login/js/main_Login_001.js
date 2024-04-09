$(function () {
  $("#loginBtn").click(function () {
    alert("hello world loginBtn");
  });

  $("#createBtn").click(function () {
    alert("hello world createBtn");
  });

  /* 動畫 */
  $(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });
});
