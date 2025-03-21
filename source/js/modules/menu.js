export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);
  let screenBackground = document.querySelector(`.screen-background`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function (event) {
      if (event.target.dataset.href === `prizes`) {
        event.preventDefault();
        window.setTimeout(() => {
          window.location = `#prizes`;
          if (screenBackground) {
            screenBackground.classList.remove(`screen-background--visible`);
            screenBackground.classList.add(`screen-background--hidden`);
          }
        }, 300); // Задерживаемся на 300 милисек
        if (screenBackground) {
          screenBackground.classList.remove(`screen-background--hidden`);
          screenBackground.classList.add(`screen-background--visible`);
        }
      } else {
        if (screenBackground) {
          screenBackground.classList.remove(`screen-background--visible`);
          screenBackground.classList.add(`screen-background--hidden`);
        }
      }
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });
  }
};
