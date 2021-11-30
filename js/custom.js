const updateProperties = (elem, state) => {
  elem.style.setProperty("--x", `${state.x}px`);
  elem.style.setProperty("--y", `${state.y}px`);
  elem.style.setProperty("--width", `${state.width}px`);
  elem.style.setProperty("--height", `${state.height}px`);
  elem.style.setProperty("--radius", state.radius);
  elem.style.setProperty("--scale", state.scale);
};

document.querySelectorAll(".cursor,.cursor2,.cursor3").forEach((cursor) => {
  let onElement;

  const createState = (e) => {
    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 55,
      height: 55,
      radius: "50%",
    };

    const computedState = {};

    if (onElement != null) {
      const { top, left, width, height } = onElement.getBoundingClientRect();
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

      computedState.x = left + width / 2;
      computedState.y = top + height / 2;
      computedState.width = width;
      computedState.height = height;
      computedState.radius = radius;
    }

    return {
      ...defaultState,
      ...computedState,
    };
  };

  document.addEventListener("mousemove", (e) => {
    const state = createState(e);
    updateProperties(cursor, state);
  });

  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }
});

$(".skill-text").on("click", function () {
  $("body").addClass("skill-on");
});
$(".close-page").on("click", function () {
  $("body").removeClass("skill-on");
});

$(".contact-text").on("click", function () {
  $("body").addClass("contact-on");
});
$(".close-page").on("click", function () {
  $("body").removeClass("contact-on");
});

$(".project-text").on("click", function () {
  $("body").addClass("project-on");
});
$(".close-page").on("click", function () {
  $("body").removeClass("project-on");
});

$(".about-text").on("click", function () {
  $("body").addClass("about-on");
});
$(".close-page").on("click", function () {
  $("body").removeClass("about-on");
});
