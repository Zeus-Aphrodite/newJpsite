// popup
let currentIndex = 0;

function openPopup(index) {
  currentIndex = index;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  popup.style.opacity = "0";
  setTimeout(() => {
    popup.classList.add("show");
    popup.style.opacity = "1";
  }, 10);

  const popupContent = document.querySelector(".popup-content");
  popupContent.scrollTop = 0;

    toggleNavigationButtons();
}

// ポップアップを閉じる関数
function closePopup(event) {
  if (event.target !== document.querySelector('.popup-content') && !event.target.closest('.nav')) {
    const popup = document.getElementById("popup");
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.classList.remove("show");
      popup.style.display = "none";
    }, 600);
  }
}

function nextPopup() {
  currentIndex = (currentIndex + 1) % 3;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

  const popupContent = document.querySelector(".popup-content");
  popupContent.scrollTop = 0;

    // ボタンの表示/非表示を切り替え
    toggleNavigationButtons();
}

function prevPopup() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

  const popupContent = document.querySelector(".popup-content");
  popupContent.scrollTop = 0;
  
    // ボタンの表示/非表示を切り替え
    toggleNavigationButtons();
}

// アコーディオン area4
$(function(){
  $('.s_01 .accordion_one .accordion_header').click(function(){
    $(this).next('.accordion_inner').slideToggle(200);
    $(this).toggleClass("open");
  });
});

// アコーディオン area9
$(function() {
  $('.accordion_header-9').click(function() {
    // アコーディオンの開閉アニメーション
    $(this).prev('.accordion_inner-9').slideToggle(200);

    // クラスをトグル
    $(this).toggleClass("open");

    // テキストノードを切り替え
    const textElement = $(this).contents().filter(function() {
      return this.nodeType === 3; // テキストノードのみ取得
    }).get(0); // 取得したテキストノードを参照

    if ($(this).hasClass("open")) {
      if (textElement) textElement.nodeValue = "詳細を非表示にする"; // テキスト変更
    } else {
      if (textElement) textElement.nodeValue = "詳細を表示する"; // テキスト変更
    }
  });
});

// -----popup 2-----
(function () {
  window.SecondNamespace = {
      currentIndex: 0,

      // ポップアップを開く関数
      openPopup: function (index) {
          this.currentIndex = index;

          const content = document.getElementById(`second-item${this.currentIndex}`).innerHTML;
          document.getElementById("second-popupText").innerHTML = content;

          // ポップアップ全体のスタイル設定
          const popup = document.getElementById("second-popup");
          popup.style.display = "flex";
          popup.style.opacity = "0";

          // クローズボタンのクラス設定
          const closeButton = popup.querySelector('.second-close');
          closeButton.classList.remove("popup-0", "popup-1"); // 既存のクラスを削除
          closeButton.classList.add(`popup-${this.currentIndex}`); // 適切なクラスを追加

          // 表示とフェードイン
          setTimeout(() => {
              popup.classList.add("show");
              popup.style.opacity = "1";
          }, 10);

          const popupContent = document.querySelector(".second-popup-content");
          popupContent.scrollTop = 0;

          // ボタンの表示制御
          this.updateButtonVisibility();
      },

      // ポップアップを閉じる関数
      closePopup: function (event) {
          if (event.target !== document.querySelector('.second-popup-content') && !event.target.closest('.second-nav')) {
              const popup = document.getElementById("second-popup");
              popup.style.opacity = "0";
              setTimeout(() => {
                  popup.classList.remove("show");
                  popup.style.display = "none";
              }, 600);
          }
      }
  };
})();

$(function () {
  var headerHight = 100;
  $('a[href^="#"]').click(function () {
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top - headerHight;
  $("html, body").animate({
  scrollTop: position
  }, 500, "swing");
  return false;
  });
});

// scroll hint TOP
new ScrollHint('.js-scrollable', {
  remainingTime: 5000,
  suggestiveShadow: true,
  i18n: {
    scrollable: 'スクロールできます'
  }
});

function closeChat() {
  document.querySelector('.chat-support').style.display = 'none';
}
