
if (typeof AOS !== 'undefined') {
	AOS.init({
		duration: 700
	});
}

//ウインドウ幅992px以下から992px以上になった時のみページをリロードさせる(レイアウト関係)

var breakPoint = 992;
var resizeFlag;

var resizeWindow = function resizeWindow() {
	window.addEventListener(
		"resize",
		function () {
			if (breakPoint < window.innerWidth && resizeFlag) {
				setTimeout(function() {
				window.location.reload();
			});
			resizeFlag = false;
			} else if (breakPoint >= window.innerWidth && !resizeFlag) {
			resizeFlag = true;
			}
		},false
	);
};

window.addEventListener(
	"load",
	function () {
    if (breakPoint < window.innerWidth) {
		resizeFlag = false;
    } else {
		resizeFlag = true;
    }
    resizeWindow();
	},false
);


$(function () {

	//スムーススクロール
	$('a[href^="#"]').click(function () {
		// スクロールの速度
		var speed = 800; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top - 76;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

	//ハンバーガーメニュー
	$(function () {
		$('#btn-trigger').on('click', function () {
				$('.gNav').fadeToggle();
				$('body').toggleClass('hamburger');
				$('.btn-trigger').toggleClass('active');
		});
	});


	//フッターメニュー
	$('.toggle_switch').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.toggle_contents').slideToggle();
	});

	 //topに戻るアイコン
	var topBtn = $('.top_icon');
	topBtn.hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else{
			topBtn.fadeOut();
		}
	});

	   //スクロールしてTopに戻る
	topBtn.click(function(){
		$('body,html').animate({
			scrollTop:0
		}, 700);
		return false;
	});


	//スマホでの100vh調整
	$(document).ready(function(){
		var hSize = $(window).height();
		$('.height_100vh').height(hSize); // アドレスバーを除いたサイズを付与
		});
		$(window).resize(function(){ // ページをリサイズした時の処理
		var hSize = $(window).height();
		$('.height_100vh').height(hSize); // アドレスバーを除いたサイズを付与
	});


});

