{
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".close");
  const imgFirst = document.querySelector("[data-id='1']");
  const imgSecond = document.querySelector("[data-id='2']");
  const imgThird = document.querySelector("[data-id='3']");

  let tlContent = gsap.timeline({
    defaults: { opacity: 0, ease: "power1.out" },
  });
  let tlMenu = gsap.timeline({
    paused: true,
    defaults: { opacity: 0 },
  });

  tlContent
    .from(".hero__title", {
      duration: 0.7,
      delay: 0.4,
      y: 100,
    })
    .from(".hero__btn", { duration: 0.7, y: 100 }, "-=0.7")
    .from(
      ".hero__descr",
      {
        duration: 0.7,
      },
      "-=0.2"
    )
    .from(
      imgFirst,
      {
        duration: 0.7,
        scale: 0.8,
      },
      "-=0.4"
    )
    .from(
      imgSecond,
      {
        duration: 0.7,
        scale: 0.8,
      },
      "-=0.3"
    )
    .from(
      imgThird,
      {
        duration: 0.7,
        scale: 0.8,
      },
      "-=0.3"
    )
    .from(
      ".photos__author",
      {
        duration: 0.7,
      },
      "-=0.5"
    );

  tlMenu
    .from(menu, {
      duration: 1.4,
      ease: "power1.out",
    })
    .from(
      ".menu__top",
      {
        duration: 0.7,
        y: -20,
        ease: "power1.out",
      },
      "-=1.2"
    )
    .from(
      ".menu__nav",
      {
        duration: 0.7,
        y: 50,

        ease: "power1.out",
      },
      "-=1"
    )
    .from(
      ".menu__right",
      {
        duration: 0.7,
        y: 20,

        ease: "power1.out",
      },
      "-=0.4"
    )
    .from(
      ".social",
      {
        duration: 0.7,
        y: 20,

        ease: "power1.out",
      },
      "-=0.7"
    );

  burger.addEventListener("click", () => {
    menu.classList.add("menu--open");

    tlMenu.play();
  });

  closeMenu.addEventListener("click", () => {
    tlMenu.reverse();

    setTimeout(() => {
      menu.classList.remove("menu--open");
    }, 2000);
  });
}
