/** @format */

const h1 = document.querySelector('.hello:first-child h1');

h1.addEventListener('click', () => {
  const clickActive = 'active'; // .active css가 적용되도록 className에다가 active만 추가해주는 함수

  if (h1.classList.contains(clickActive)) {
    h1.classList.remove(clickActive);
  } else {
    h1.classList.add(clickActive);
  }
});
