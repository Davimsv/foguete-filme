document.addEventListener("DOMContentLoaded", function () {
    let splide = new Splide(".splide", {
        type: "loop",
        heightRatio: 0.55,
        cover: true,
        arrows: false,
        lazyLoad: "nearby",
        direction: "ttb",
        autoplay: "play",
        speed: 2000
        
    });
    splide.mount();
    AOS.init();
});
