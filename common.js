// popup
let currentIndex = 0;

function openPopup(index) {
  currentIndex = index;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // ポップアップを表示
  popup.style.opacity = "0";  // 初期状態で透明にする
  setTimeout(() => {
    popup.classList.add("show"); // フェードイン
    popup.style.opacity = "1";  // 表示時にopacityを1にする
  }, 10); // 少し遅らせてクラスを追加

    // ボタンの表示/非表示を切り替え
    toggleNavigationButtons();
}

// ポップアップを閉じる関数
function closePopup(event) {
  // ポップアップの内容部分（ボタンなど）をクリックした場合は閉じないようにする
  if (event.target !== document.querySelector('.popup-content') && !event.target.closest('.nav')) {
    const popup = document.getElementById("popup");
    popup.style.opacity = "0";  // フェードアウト開始
    setTimeout(() => {
      popup.classList.remove("show"); // showクラスを削除
      popup.style.display = "none";  // 非表示にする
    }, 600); // アニメーションの時間と一致させる
  }
}

function nextPopup() {
  currentIndex = (currentIndex + 1) % 3;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

    // ボタンの表示/非表示を切り替え
    toggleNavigationButtons();
}

function prevPopup() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  const content = document.getElementById(`item${currentIndex}`).innerHTML;
  document.getElementById("popupText").innerHTML = content;

    // ボタンの表示/非表示を切り替え
    toggleNavigationButtons();
}

// 「prev」と「next」ボタンの表示・非表示を切り替える関数
function toggleNavigationButtons() {
  const nextButton = document.querySelector('.nav.next');
  const prevButton = document.querySelector('.nav.prev');

  // 最初のアイテム（index 0）の場合は「prev」ボタンを非表示
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  // 最後のアイテム（index 6）の場合は「next」ボタンを非表示
  if (currentIndex === 2) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

// アコーディオン area4
$(function(){
  $('.s_01 .accordion_one .accordion_header').click(function(){
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});

// アコーディオン area9
$(function() {
  $('.accordion_header-9').click(function() {
    // 直前の要素を選択して開閉
    $(this).prev('.accordion_inner-9').slideToggle();

    $(this).toggleClass("open");

    const textElement = $(this).contents().filter(function() {
      return this.nodeType === 3; // テキストノードだけを取得
    });

    if ($(this).hasClass("open")) {
      textElement.replaceWith("詳細を閉じる");
    } else {
      textElement.replaceWith("詳細を表示する");
    }
  });
});

// -----popup 2-----
(function() {
  window.SecondNamespace = {
      currentIndex: 0,
      openPopup: function(index) {
          this.currentIndex = index;
          const content = document.getElementById(`second-item${this.currentIndex}`).innerHTML;
          document.getElementById("second-popupText").innerHTML = content;

          const popup = document.getElementById("second-popup");
          popup.style.display = "flex";
          popup.style.opacity = "0";
          setTimeout(() => {
              popup.classList.add("show");
              popup.style.opacity = "1";
          }, 10);

          // ボタンの表示制御を更新
          this.updateButtonVisibility();
      },
      closePopup: function(event) {
          if (event.target !== document.querySelector('.second-popup-content') && !event.target.closest('.second-nav')) {
              const popup = document.getElementById("second-popup");
              popup.style.opacity = "0";
              setTimeout(() => {
                  popup.classList.remove("show");
                  popup.style.display = "none";
              }, 600);
          }
      },
      nextPopup: function() {
          this.currentIndex = (this.currentIndex + 1) % 2; // 最大数を適切に設定
          const content = document.getElementById(`second-item${this.currentIndex}`).innerHTML;
          document.getElementById("second-popupText").innerHTML = content;
          // ボタンの表示制御を更新
          this.updateButtonVisibility();
      },
      prevPopup: function() {
          this.currentIndex = (this.currentIndex - 1 + 2) % 2; // 最大数を適切に設定
          const content = document.getElementById(`second-item${this.currentIndex}`).innerHTML;
          document.getElementById("second-popupText").innerHTML = content;
          // ボタンの表示制御を更新
          this.updateButtonVisibility();
        },
        updateButtonVisibility: function () {
          // prevボタンの表示/非表示制御
          const prevButton = document.querySelector('.second-prev');
          // nextボタンの表示/非表示制御
          const nextButton = document.querySelector('.second-next');

          if (this.currentIndex === 0) {
              prevButton.style.display = "none";
              nextButton.style.display = "block";
          } else if (this.currentIndex === 1) {
              prevButton.style.display = "block";
              nextButton.style.display = "none";
          }
      }
  };
})();

$(function () {
  var headerHight = 100; //ヘッダーの高さ
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
  suggestiveShadow: true, //スクロール可能な要素右端に影を付ける
  i18n: {
    scrollable: 'スクロールできます' //表示するテキスト
  }
});

function closeChat() {
  document.querySelector('.chat-support').style.display = 'none';
}

// pop scroll hint
