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

