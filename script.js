// スクロール時のアニメーション
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

function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.textContent = imgElement.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

<script>
// モーダル関連の要素を取得
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
