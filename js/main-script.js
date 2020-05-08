

$(document).ready(function(){
    gsap.registerPlugin(Text);
    
    // homePageAnimation();
    
    // right sidebar slider script start
    (function () {
        var $frame = $('.sidebar-slider');
        var $wrap   = $frame.parent();
        
        // Call Sly on frame
        $frame.sly({
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            prevPage: $wrap.find('.prev'),
            nextPage: $wrap.find('.next')
        });
    }());
    // right sidebar slider script end

    // right sidebar script start
    $("#portfolio-btn").click(function(e){
        e.preventDefault();
        gsap.to("#portfolio-sidebar", {right: "0", duration: 1})
        setTimeout(() => {
            gsap.to(".header-menu", {right: "32vw", duration: 0.7})
            gsap.to(".main-content", {left: "44%", duration: 0.7})
            gsap.to(".page-no", {left: "40%", duration: 0.7})
        }, 370)
        setTimeout(() => {
            $(".right-sidebar").addClass('open')
        }, 1000)
    })

    $(".closs-btn").click(function(){
        $(".right-sidebar").removeClass('open')
        gsap.to("#portfolio-sidebar", {right: "-100%", duration: 2})
        gsap.to(".header-menu", {right: "4vw", duration: 0.7})
        gsap.to(".main-content", {left: "50%", duration: 0.7})
        gsap.to(".page-no", {left: "49%", duration: 0.7})
    })
    // right sidebar script end

    landingPageAnimation()

})

// landing page animation script start
function landingPageAnimation(){

    const tl1 = gsap.timeline();
    
    const mainHeading = new Text('.sm-text, .lg-text', {type:"words, chars", wordDelimiter: " " });
    const started_link =  new Text('.started-link-text', {type:"words, chars" });

    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".main-page",
        triggerHook: 0,
        duration: "5000"
    })
    .setPin(".main-page")
    .setTween(tl1)
    // .addIndicators() 
    .addTo(controller);

    scene1.on("start", function (event) {
        gsap.set('.main-page', {filter: "blur(8px)", opacity: 1});
        tl1.to('.main-page', {filter: "blur(0px)", duration: 1})
        gsap.set(".sm-text, .lg-text", {perspective: 400});
        tl1.to('.product-img', {x: "-18vw", duration: 2})
        tl1.to(".sm-text, .lg-text", {visibility: "visible"});
        tl1.from(mainHeading.chars, {duration: 1, opacity:0, scale:0, y:80, x: 80, rotationX:100, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "+=0",);

        tl1.to(mainHeading.chars, { duration: 0.8, opacity: 0, stagger: 0.06},);
        tl1.to('.product-img', {x: "-50vw", duration: 2}, "-=1")
        tl1.to('.box', {right: "-9%", duration: 2}, "-=1.4")
        gsap.set('.cls-1', {perspective: 400});
        tl1.from('.cls-1', {duration: 1, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07})
        tl1.from('.cls-box', {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.2})
        tl1.from(started_link.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "+=0",);
        tl1.to('.main-page', {opacity: 0, duration: 2});
    });


    const tl2 = gsap.timeline();

    const whoWeAreBtn =  new Text('.whoWeAre-btn', {type:"words, chars" });
    const contactLink =  new Text('.contact-link', {type:"words, chars" });
    const portfolioBtn =  new Text('#portfolio-btn', {type:"words, chars" });
    const pageNo =  new Text('.page-no', {type:"words, chars" });
    const footerMenu =  new Text('.footer-menu-item', {type:"words, chars" });
    const copyRight =  new Text('.copyright', {type:"words, chars" });
    const agencyTag =  new Text('.agency-tag', {type:"words, chars" });

    // gsap.set(".first-sec-text", {perspective: 400});
    tl2.to('.home-page', {duration: 1, opacity: 1})
    tl2.from('#portfolio-btn', {duration: 1, opacity: 0})
    tl2.from(whoWeAreBtn.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=1");
    tl2.from(contactLink.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=1");
    tl2.from(portfolioBtn.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=2");
    tl2.from(pageNo.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=3");
    tl2.from('.header-line-bar', {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.2}, "-=2")
    tl2.from('.header-box', {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.2}, "-=3")
    tl2.from('.page-dot', {duration: 1, x: 200, autoAlpha: 0, ease: "elastic", stagger: 0.2}, "-=3")
    tl2.from(copyRight.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=3");
    tl2.from(footerMenu.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=3");
    tl2.from(agencyTag.chars, {duration: 1, opacity:0, scale:0, y:80, x: 100, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07}, "-=3");
    tl2.from('.top-line', {duration: 3, y: -500, autoAlpha: 0, ease: "elastic", stagger: 0.2}, "-=3")
    tl2.from('.bottom-line', {duration: 3, y: 500, autoAlpha: 0, ease: "elastic", stagger: 0.2}, "-=3")
    
    
    var controller2 = new ScrollMagic.Controller();
    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".home-page",
        triggerHook: 1,
        duration: "1000",
        offset: -300
    })
    .setPin(".home-page")
    .setTween(tl2)
    // .addIndicators() 
    .addTo(controller2);



    const tl3 = gsap.timeline();
    
    tl3.to('.first-section', {duration: 1, opacity: 1})
    tl3.from('.first-sec-content', {duration: 3, opacity: 0, autoAlpha: 0, ease: "back", stagger: 1})

    var controller3 = new ScrollMagic.Controller();
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".first-section",
        triggerHook: 1,
        duration: "1000",
    })
    .setPin(".first-section")
    .setTween(tl3)
    // .addIndicators() 
    .addTo(controller3);


}
// landing page animation script end


