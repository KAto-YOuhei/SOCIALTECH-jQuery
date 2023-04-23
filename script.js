$(function () {
  // ボタンアニメーション
  $(".button-more").on("mouseover", function () {
    $(this).animate(
      {
        opacity: 0.5,
        marginLeft: 20,
      },
      100
    );
  });
  //ボタンアニメーションmauseoutで戻す
  $(".button-more").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1,
        marginLeft: 1,
      },
      100
    );
  });
});
