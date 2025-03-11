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

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("read-more")) {
      const container = event.target.closest(".review"); 
      container.querySelector(".short-text").style.display = "none";
      container.querySelector(".full-text").style.display = "block";
    }
  });
});
