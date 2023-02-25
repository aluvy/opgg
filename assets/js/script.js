window.addEventListener("load", ()=>{

    const desktopActive = function(){
        let desktopNavOn = document.querySelector(".desktop__nav .on");
        let normal = Array.from(document.querySelectorAll("div.item__normal, span.item__normal"));
        let mini = Array.from(document.querySelectorAll("div.item__mini, span.item__mini"));

        if ( desktopNavOn.classList.contains("item__normal") ){
            normal.forEach((item, idx)=>{ item.style.display = "block"; })
            mini.forEach((item, idx)=>{ item.style.display = "none"; })
        } else {
            normal.forEach((item, idx)=>{ item.style.display = "none"; })
            mini.forEach((item, idx)=>{ item.style.display = "block"; })
        }
    }
    desktopActive();

    let desktopNav = Array.from(document.querySelectorAll(".desktop__nav button"));
    desktopNav.forEach((item, idx)=>{
        item.addEventListener("click", function(e){
            this.parentNode.querySelectorAll("button").forEach((btn, idx)=>{ btn.classList.remove("on") })
            this.classList.add("on");
            desktopActive();
        })
    })

    let scroll = document.querySelector(".main__scroll-btn");
    let winH = window.innerHeight;
    scroll.addEventListener("click", ()=>{
        window.scrollTo({
            top:winH,
            behavior: "smooth"
        })
    })

    let slideBtnWrap = document.querySelector(".ui__slide-btnwrap");
    let slideBtn = [...slideBtnWrap.querySelectorAll("button")];
    let slideItem = [...document.querySelectorAll(".ui__slide-item .item")];
    // console.log(slideBtn, slideItem);
    slideBtn.forEach((e, i)=>{
        e.addEventListener("click", function(){
            sibilings(e).forEach((el)=>{ el.classList.remove("on") });
            e.classList.add("on");

            let left = 19.5 * (i+1);
            slideBtnWrap.style.left = `calc(50% - ${left}rem)`;

            slideItem.forEach((el)=>{ el.classList.remove("on") });
            document.querySelector(`.ui__slide-item .item0${i+1}`).classList.add("on");
        })
    })

    const sibilings = (el) => [...el.parentElement.children].filter(node => node !== el );
    
    
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".main__content-ttl p", {
        scrollTrigger: {
            trigger : ".main__content-ttl p",
            toggleActions: "restart play resume pause"
        },
        y:"10rem", opacity:0, duration:1.5
    })

    gsap.from(".main__content-scroll p", {
        scrollTrigger: {
            trigger : ".main__content-scroll p",
            toggleActions: "restart play resume pause"
        },
        y:"10rem", opacity:0, delay: 0.7, duration:1.5
    })

    gsap.from(".ui__ttl", {
        scrollTrigger: {
            trigger : ".ui__ttl",
            toggleActions: "restart play resume pause"
        },
        y:"10rem", opacity:0, duration:1
    })

    gsap.from(".update__ttl p", {
        scrollTrigger: {
            trigger : ".update__ttl p",
            toggleActions: "restart play resume pause"
        },
        y:"10rem", opacity:0, duration:1
    })

    const updateImage = document.querySelectorAll(".update__image span");
    updateImage.forEach((item, idx)=>{
        gsap.from(item , {
            scrollTrigger: {
                trigger : item,
                toggleActions: "restart play resume pause",
                start:"top bottom",

            },
            y:"10rem", opacity:0, duration:1
        })
    })
    

    // gsap.from(".interaction__item", {
    //     scrollTrigger : {
    //         trigger : ".interaction__group",
    //         // markers: true,
    //         start: "top top",
    //         // end: "bottom top",
    //         scrub: true,
    //         // pin: true   // boolean 값 또는 엘리먼트
    //     },
    //     // top:0, paddingBottom:"56.5%", margin:0;
    //     // top:0, width:"130rem", height:"73rem",
    // });
    gsap.to(".interaction__item", {
        scrollTrigger : {
            trigger : ".interaction__group",
            start: "top top",
            scrub: true,
            // pin: true   // boolean 값 또는 엘리먼트
        },
        top:"85rem", width:"80rem", height:"45rem"
    });
    
    gsap.to(".interaction__txt", {
        scrollTrigger : {
            trigger : ".interaction__group",
            // markers: true,
            start: "top top",
            end: "bottom 100px",
            scrub: true,
            // pin: true   // boolean 값 또는 엘리먼트
        },
        opacity: 0,
    })
})