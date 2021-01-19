const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeBtnRef = document.querySelector('.theme-switch__toggle');

themeBtnRef.addEventListener('click', setTheme);
getTheme();

function setTheme() {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  const handleClassBody = bodyRef.getAttribute('class');
  localStorage.setItem('current-theme', handleClassBody);
}

function getTheme() {
  if (localStorage.getItem('current-theme')) {
    const currentTheme = localStorage.getItem('current-theme');
    bodyRef.className = currentTheme;
  }

  if (bodyRef.classList.contains(Theme.DARK)) {
    themeBtnRef.setAttribute('checked', 'true');
  }
}
