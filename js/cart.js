const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const modal = document.getElementById('modal-cart');
    const closeBtn = modal.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = '';
    });
}

cart();