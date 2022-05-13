;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  
  const mobileMenuRef = document.querySelector("[data-menu]")
  const body = document.querySelector("body");
  const buyNow = document.getElementById('button-buy-now');

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    buyNow.classList.toggle('hidden');
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.toggle("is-open")
    body.classList.toggle("no-scroll");
  });
  
    const mobMenuItems = Array.prototype.slice.call(document.getElementsByClassName('mob-menu__item'));
    mobMenuItems.forEach(function (event) {
      let mobMenuLink = event.querySelector('.mob-menu__link');
      if (mobMenuLink != null) {
        mobMenuLink.addEventListener("click", () => {
          mobileMenuRef.classList.toggle("is-open");
          menuBtnRef.setAttribute("aria-expanded", false);
          menuBtnRef.classList.toggle("is-open");
          buyNow.classList.toggle('hidden');
          body.classList.toggle("no-scroll");
        });
      }
      //console.log(event.querySelector('.mob-menu__link'));
    });
  })()

