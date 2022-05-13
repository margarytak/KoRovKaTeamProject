!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons =
      document.querySelectorAll(
        '.js-open-modal',
      ) /*<--- Кнопка открытия (Ставим как один из класов), рядом (не в class а просто рядом) ставим data-modal="цифра" */,
    overlay =
      document.querySelector(
        '.js-overlay-modal',
      ) /*<--- Оверлей не трогаем, он срабатывает на все модалки*/,
    closeButtons =
      document.querySelectorAll(
        '.js-modal-close',
      ); /*<--- Кнопка закрытия (Ставим как один из класов), data-modal не нужна*/

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      /*На каждую модалку ставим класс modal и рядом data-modal="цифра аналогичная кнопке"*/
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      modalElem.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('no-scroll');
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        body.classList.remove('no-scroll');
      }
    },
    false,
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

const body = document.querySelector('body');
const mobileMenuRef = document.querySelector('[data-menu]');
const menuBtnRef = document.querySelector('[data-menu-button]');
