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

  //カルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  //お問い合わせフォームの入力チェック
  function () {
    
  }
});
