document.addEventListener("DOMContentLoaded", function () {
  var swiperContainer = document.querySelector(".mySwiper");
  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: "#nextEl",
        prevEl: "#prevEl",
      },
      grabCursor: true,
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 20,
        },
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .mySwiper");
  }
  var swiperContainer = document.querySelector(".specialists");
  if (swiperContainer) {
    var swiper = new Swiper(".specialists", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: "#speci-next",
        prevEl: "#speci-prev",
      },
      grabCursor: true,
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 20,
        },
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .specialists");
  }

  var swiperContainer = document.querySelector(".programs-swiper");
  if (swiperContainer) {
    var swiper = new Swiper(".programs-swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".next-programs",
        prevEl: ".prev-programs",
      },
      grabCursor: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 20,
        },
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .programs-swiper");
  }

  var swiperContainer = document.querySelector(".certificates-swiper");
  if (swiperContainer) {
    var swiper = new Swiper(".certificates-swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".next-certificates",
        prevEl: ".prev-certificates",
      },
      grabCursor: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 20,
        },
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .certificates-swiper");
  }

  var swiperContainer = document.querySelector(".about-swiper");
  if (swiperContainer) {
    var swiper = new Swiper(".about-swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".next-about",
        prevEl: ".prev-about",
      },
      grabCursor: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        789: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        0: {
          spaceBetween: 20,
        },
      },
    });
  } else {
    console.warn("Swiper контейнер не найден: .about-swiper");
  }

  var myMap;
  window.onload = function () {
    ymaps.ready(init);

    function init() {
      if (myMap) {
        myMap.destroy();
      }

      let coordinates = [43.574325, 39.747658]; // Координаты ул. Яна Фабрициуса, 12

      myMap = new ymaps.Map("map", {
        center: coordinates,
        zoom: 17,
        controls: ["zoomControl"],
      });

      let myPlacemark = new ymaps.Placemark(
        coordinates,
        {
          balloonContent: `
              <strong>Сочи, ул. Яна Фабрициуса, 12</strong><br>
            `,
        },
        {
          iconLayout: "default#image",
          iconImageHref: "assest/main/map-icon.png",
          iconImageSize: [25, 30],
          iconImageOffset: [-12, -30],
        }
      );

      myMap.geoObjects.add(myPlacemark);
    }
  };

  //отзывы
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("read-more")) {
      const container = event.target.closest(".review");
      container.querySelector(".short-text").style.display = "none";
      container.querySelector(".full-text").style.display = "block";
    }
  });

  //menu header
  const menuModal = document.getElementById("menu-modal");
  const closeButton = document.querySelector(".close-button");
  const openModalButton = document.getElementById("openModalButton");
  function openModal() {
    if (menuModal) {
      menuModal.style.display = "flex";
    }
  }
  function closeModal() {
    if (menuModal) {
      menuModal.style.display = "none";
    }
  }
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
  if (menuModal) {
    window.addEventListener("click", (event) => {
      if (event.target === menuModal) {
        closeModal();
      }
    });
  }
  if (openModalButton) {
    openModalButton.addEventListener("click", openModal);
  }
  const modalLinks = document.querySelectorAll(".menu-modal-links a");
  modalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      closeModal();
    });
  });

  //tell
  const openBtn = document.getElementById("openMenuWeb");
  const closeBtn = document.getElementById("closeMenuWeb");
  const menuweb = document.getElementById("menuweb");
  if (openBtn && closeBtn && menuweb) {
    openBtn.addEventListener("click", function () {
      menuweb.style.display = "grid";
    });

    closeBtn.addEventListener("click", function () {
      menuweb.style.display = "none";
    });
  } else {
    console.log(
      "Не найден один из элементов: openMenuWeb, closeMenuWeb или menuweb"
    );
  }

  //modal 'Первый шаг сделан!'
  const modalStep = document.querySelector(".menu-modal-step");
  const openModalLast = document.getElementById("openModalLast");
  const closeModalButton = document.querySelector(".close-button");
  if (openModalLast && modalStep && closeModalButton) {
    openModalLast.addEventListener("click", function () {
      modalStep.style.display = "flex";
    });

    closeModalButton.addEventListener("click", function () {
      modalStep.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modalStep) {
        modalStep.style.display = "none";
      }
    });
  } else {
    console.log("Один или несколько элементов не найдены в DOM.");
  }

  //галерея About
  const modalAbout = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModalAbout = document.getElementById("closeModal");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  if (modalAbout && modalImage && modalCaption) {
    let images = [];
    let altTexts = [];
    let currentIndex = 0;

    document.querySelectorAll(".gallery-item").forEach((img, index) => {
      images.push(img.src);
      altTexts.push(img.alt);
      img.addEventListener("click", function () {
        currentIndex = index;
        openModalAbout(images[currentIndex], altTexts[currentIndex]);
      });
    });
    function openModalAbout(src, alt) {
      modalAbout.style.display = "flex";
      modalImage.src = src;
      modalCaption.textContent = alt;
    }
    function closeModalWindow() {
      modalAbout.style.display = "none";
    }
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      modalImage.src = images[currentIndex];
      modalCaption.textContent = altTexts[currentIndex];
    }
    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImage.src = images[currentIndex];
      modalCaption.textContent = altTexts[currentIndex];
    }
    if (closeModalAbout)
      closeModalAbout.addEventListener("click", closeModalWindow);
    if (nextButton) nextButton.addEventListener("click", showNext);
    if (prevButton) prevButton.addEventListener("click", showPrev);
    document.addEventListener("keydown", function (event) {
      if (modalAbout.style.display === "flex") {
        if (event.key === "ArrowRight") showNext();
        if (event.key === "ArrowLeft") showPrev();
        if (event.key === "Escape") closeModalWindow();
      }
    });
  }

  //Консультации
  const modalApplication = document.querySelector(".modal-application");
  const openModalButtonApplication =
    document.querySelector(".open-application");
  const closeModalButtonApplication = document.querySelector(
    ".close-button_application"
  );

  if (
    openModalButtonApplication &&
    modalApplication &&
    closeModalButtonApplication
  ) {
    openModalButtonApplication.addEventListener("click", function () {
      modalApplication.style.display = "flex";
    });
    closeModalButtonApplication.addEventListener("click", function () {
      modalApplication.style.display = "none";
    });
    window.addEventListener("click", function (event) {
      if (event.target === modalApplication) {
        modalApplication.style.display = "none";
      }
    });
  } else {
    console.log("Один или несколько элементов не найдены в DOM.");
  }
  // maket
  $(document).ready(function () {
    $("#phone").inputmask("+7 (999) 999-99-99");
  });

  //section open
  const buttons = document.querySelectorAll(".toggle-button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const section = document.getElementById(targetId);

      if (section) {
        const allSections = document.querySelectorAll(".nature");
        allSections.forEach((sec) => {
          if (sec !== section) {
            sec.classList.add("hidden");
          }
        });
        section.classList.toggle("hidden");
        if (!section.classList.contains("hidden")) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

// Получаем элементы модального окна
const modalOtz = document.getElementById("modal-otz");
const modalImageOtz = document.getElementById("modalImage-otz");
const modalVideoOtz = document.getElementById("modalVideo-otz");
const closeModalOtz = document.getElementById("closeModal-otz");

// Получаем все изображения и видео в слайдах
const imagesOtz = document.querySelectorAll(".rew-image");
const videosOtz = document.querySelectorAll(".reviews-slide_description video");

// Функция для открытия модального окна
function openModalOtz(src, isVideo) {
    modalOtz.style.display = "flex"; // Показываем модальное окно
    if (isVideo) {
        modalVideoOtz.src = src;
        modalVideoOtz.style.display = "block";
        modalImageOtz.style.display = "none";
    } else {
        modalImageOtz.src = src;
        modalImageOtz.style.display = "block";
        modalVideoOtz.style.display = "none";
    }
}

// Обработчик кликов на изображениях
imagesOtz.forEach((image) => {
    image.addEventListener("click", () => {
        openModalOtz(image.src, false);
    });
});

// Обработчик кликов на видео
videosOtz.forEach((video) => {
    video.addEventListener("click", () => {
        openModalOtz(video.currentSrc || video.src, true);
    });
});

// Закрытие модального окна
closeModalOtz.addEventListener("click", () => {
    modalOtz.style.display = "none";
    modalVideoOtz.pause(); // Останавливаем видео при закрытии
    modalVideoOtz.src = ""; // Очищаем источник видео
    modalImageOtz.src = ""; // Очищаем источник изображения
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modalOtz) {
        modalOtz.style.display = "none";
        modalVideoOtz.pause(); // Останавливаем видео при закрытии
        modalVideoOtz.src = ""; // Очищаем источник видео
        modalImageOtz.src = ""; // Очищаем источник изображения
    }
});


})
