const navItemsEls = document.querySelectorAll('.nav-item');

navItemsEls.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    const currentActive = document.querySelector('.nav-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    this.classList.add('active');
  });
});