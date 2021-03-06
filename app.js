//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(200px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-30deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

function scrollMagicX() {
    const controlller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: ".intro-header",
        triggerHook: 0,
    })
        .setPin(".intro-header")
        .addTo(controlller);

    const controlller2 = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: "200%",
        triggerElement: ".my-apps-header",
        triggerHook: 0,
    })
        .setPin(".my-apps-header")
        .addTo(controlller2);
}

scrollMagicX();
