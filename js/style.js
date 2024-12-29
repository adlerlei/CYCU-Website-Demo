document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有的 burger 元素
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // 為每個 burger 添加點擊事件
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // 獲取目標選單
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // 切換 burger 的 is-active 類
            el.classList.toggle('is-active');
            // 切換選單的 is-active 類
            $target.classList.toggle('is-active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 為所有科目卡片添加點擊事件
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetModal = document.getElementById(card.dataset.target);
            targetModal.classList.add('is-active');
        });
    });

    // 為所有 modal 的關閉按鈕和背景添加點擊事件
    const closeButtons = document.querySelectorAll('.modal-background, .modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('is-active');
        });
    });
});