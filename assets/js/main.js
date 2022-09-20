AOS.init();

function googleTranslateElementInit2() {
  new google.translate.TranslateElement(
    {
      includedLanguages: "tr,de,fr,es,en,it",
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
    },
    "google_translate_element"
  );
}

$(document).ready(function () {
  var windowx = $(window).width();

  /*gt = $.cookie("googtrans");
if (typeof gt != "undefined") {
    console.log("ok1");
    var gtsplit = gt.split("/");
    if (gtsplit[2] != "") {
        console.log("ok");
        $(".lang [data-lang=" + gtsplit[2] + "]").prop('selected', 'selected');
    }
}*/

  /*$('.slang').selectpicker();
    $(".bootstrap-select").click(function () {
        $(this).addClass("open");
    });
    $(document).click(function(){
        $(".bootstrap-select").removeClass("open");
    });
    $(".bootstrap-select").click(function(e){
        e.stopPropagation();
    });*/

  $(".lang").on("change", function (e) {
    var selected = this.value;
    if (selected !== "") {
      window.location = selected;
    }
  });

  $(".loadmore").click(function () {
    if ($(this).text() == "READ MORE") {
      $(this).text("LESS");
    } else {
      $(this).text("READ MORE");
    }

    $(".accordion-list li").each(function () {
      if ($(this).hasClass("lmore")) {
        $(this).toggleClass("lmoreshow");
      }
    });

    return false;
  });

  if (windowx > 968) {
    const home = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top",
        end: "bottom",
        scrub: true,
      },
    });
    gsap.utils.toArray(".parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      home.to(layer, { y: movement, ease: "none" }, 0);
    });
  }

  $(document).on("click", '.menu li a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1200
    );
  });

  /*$('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {

        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();

        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });*/

  $(".mobile-menu").click(function () {
    console.log("clicked");
    $("body").toggleClass("nav-open");
  });

  $(".nav-link").click(function () {
    $("body").removeClass("nav-open");
  });

  $(".white-box").owlCarousel({
    stagePadding: 0,
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    /*autoplayTimeout: 5000,
        autoplaySpeed: 1500,*/
    responsive: {
      0: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 2,
        margin: 15,
      },
      1000: {
        items: 5,
      },
      1400: {
        items: 5,
      },
    },
  });
});

const API_URL = "https://api.runfytoken.io/api/v1";

$.ajax({
  url: `${API_URL}/projects/current`,
  success: function (data) {
    let values = JSON.parse(data);

    $(".js-telegram").attr("href", values.social_media.telegram);
    $(".js-twitter").attr("href", values.social_media.twitter);
  },
});

$.ajax({
  url: `${API_URL}/stages`,
  success: function (data) {
    let stages = JSON.parse(data);
    let start_date = new Date(stages.data[0].start_date).getTime();
    let text = "";
    let today = new Date();

    $(".js-p1-bonus").text(stages.data[0].bonuses.base_percentage + "%");
    $(".js-p2-bonus").text(stages.data[1].bonuses.base_percentage + "%");
    $(".js-p3-bonus").text(stages.data[2].bonuses.base_percentage + "%");

    if (today < new Date(stages.data[0].start_date)) {
      start_date = new Date(stages.data[0].start_date);
      text = "PRESALE WILL START IN";
    }
    if (
      today > new Date(stages.data[0].start_date) &&
      today < new Date(stages.data[0].end_date)
    ) {
      start_date = new Date(stages.data[0].end_date);
      text = "PRESALE STAGE 1 WILL END IN";
    }

    if (
      today > new Date(stages.data[1].start_date) &&
      today < new Date(stages.data[1].end_date)
    ) {
      start_date = new Date(stages.data[1].end_date);
      text = "PRESALE STAGE 2 WILL END IN";
    }

    if (
      today > new Date(stages.data[2].start_date) &&
      today < new Date(stages.data[2].end_date)
    ) {
      start_date = new Date(stages.data[2].end_date);
      text = "PRESALE STAGE 3 WILL END IN";
    }

    $(".js-countdown-text").text(text);

    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const countDown = new Date(start_date).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        document.querySelector(".e-m-days").innerText = Math.floor(
          distance / day
        );
        (document.querySelector(".e-m-hours").innerText = Math.floor(
          (distance % day) / hour
        )),
          (document.querySelector(".e-m-minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.querySelector(".e-m-seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, 0);
  },
});
