<script>
// ==========================
// ハンバーガーメニュー
// ==========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // アイコンの切り替え（☰ ⇔ ✖）
  if (menuToggle.textContent === "☰") {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

// メニュー内のリンクを押したらメニューを閉じる
const navLinksItems = document.querySelectorAll(".nav-links a");
navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");  // メニューを閉じる
    menuToggle.textContent = "☰";        // アイコンを戻す
  });
});


// ==========================
// スクロールアニメーション
// ==========================
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});


// ==========================
// モーダル関連
// ==========================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close");

// 画像クリック時にモーダルを開く
function openModal(imgElement) {
  modal.style.display = "block";              // モーダル表示
  modalImg.src = imgElement.src;              // 画像を表示
  modalCaption.textContent = imgElement.alt;  // altをキャプションに
}

// モーダルを閉じる
function closeModal() {
  modal.style.display = "none";
}

// ✖ ボタンで閉じる
closeBtn.addEventListener("click", closeModal);

// 背景クリックでも閉じる
modal.addEventListener("click", function(e) {
  if (e.target === modal) { 
    closeModal();
  }
});
</script>
