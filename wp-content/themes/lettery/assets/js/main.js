/* -------------------------------------------

Name: 		Lettery
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

/***************************

color variables

***************************/

var variables = {
    accentColor: '#FFA726',
    darkColor: '#263238',
    lightColor: '#FAFAFA'
};

(function($) {
    'use strict';

    /* Custom Colors */
    if ($('#smooth-wrapper').data('dark-color')) {
        variables.darkColor = $('#smooth-wrapper').data('dark-color');
    }
    if ($('#smooth-wrapper').data('accent-color')) {
        variables.accentColor = $('#smooth-wrapper').data('accent-color');
    }
    if ($('#smooth-wrapper').data('light-color')) {
        variables.lightColor = $('#smooth-wrapper').data('light-color');
    }

    /* Elementor Editor */
    var elementor = 0;
    if (window.location.href.indexOf('/?elementor-preview=') > -1 || window.location.href.indexOf('&action=elementor') > -1) {
        elementor = 1;
    }

    /* First Section After Small Banner */
    var milSB = $('.mil-small-banner');
    if (milSB.length) {
        milSB.closest('.elementor-section').next().find('.elementor-container').addClass('mil-content-frame');
    }

    /* Set Min Height for Hero 1 */
    var hero1 = $('.mil-hero-1');
    if (hero1.length) {
        hero1.find('.mil-image-frame').css({
            "min-height": hero1.find('.mil-just-image').offset().top + 30 + 'px'
        });
    }

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    /***************************

    smooth scroll

    ***************************/
    var smoothScrollEnable = $('#smooth-wrapper').data('smooth-scroll');

    if (!elementor && smoothScrollEnable) {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
        });
        //ScrollTrigger.normalizeScroll(true);
    }

    /***************************

    preloader

    ***************************/

    const preloaderTimeline = gsap.timeline();

    preloaderTimeline
        .to(".mil-preloader-content", {
            ease: "sine",
            duration: 0.4,
            scale: 1,
            opacity: 1,
            delay: '0.4',
        })
        .to(".mil-ticker", {
            x: '-50%',
            ease: "linear",
            duration: 6,
            delay: '-0.4',
        })
        .to(".mil-preloader-load ", {
            width: '100%',
            ease: "sine",
            duration: 1.5,
            delay: '-5.5',
        })
        .to(".mil-preloader-content ", {
            scale: .9,
            opacity: 0,
            ease: "sine",
            duration: 0.4,
            delay: '-4',
            onComplete: function() {
                ScrollTrigger.refresh();
            },
        })
        .to(".mil-preloader-load-track ", {
            opacity: 0,
            ease: "sine",
            duration: 1.5,
            delay: '-4',
        })
        .to(".mil-preloader-1", {
            height: 0,
            ease: "sine",
            duration: 0.4,
            delay: '-3.5',
        });

    /***************************

    back to top

    ***************************/
    $(".mil-circle").on("click", function() {
        gsap.to(window, {
            scrollTo: '0',
            duration: 1,
            ease: 'sine',
        });
    });
    /***************************

    cursor

    ***************************/

    cursorInit();

    /***************************

    scroll animations

    ***************************/

    if (!elementor) {

        //appearance

        const appearance = document.querySelectorAll(".mil-appearance");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 50,
                scale: .98,
                ease: 'sine',
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //scale

        const scaleImage = document.querySelectorAll(".mil-scale-img");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //parallax

        const parallaxImage = document.querySelectorAll(".mil-parallax-img");

        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //rotate

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //travel x

        const travelX = document.querySelectorAll(".mil-travel-x");

        travelX.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                x: 0,

            }, {
                x: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //travel y

        const travelY = document.querySelectorAll(".mil-travel-y");

        travelY.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                y: 0,

            }, {
                y: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        //dissolve

        const dissolve = document.querySelectorAll(".mil-dissolve");

        dissolve.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 1,
                ease: 'linear',

            }, {
                opacity: 0,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    start: 'top-=600',
                    end: 'bottom-=100',
                }
            });
        });

    }

    /***************************

    progressbar

    ***************************/
    if (smoothScrollEnable) {
        gsap.to('.mil-progress', {
            height: '100%',
            ease: 'sine',
            scrollTrigger: {
                scrub: 0.3
            }
        });
    }

    /***************************

    counters

    ***************************/
    const number = $(".mil-counter");
    number.each(function(index, element) {
        var count = $(this),
            zero = {
                val: 0
            },
            num = count.data("number"),
            split = (num + "").split("."), // to cover for instances of decimals
            decimals = split.length > 1 ? split[1].length : 0;

        gsap.to(zero, {
            val: num,
            duration: 2,
            scrollTrigger: {
                trigger: element,
                toggleActions: 'play none none reverse',
            },
            onUpdate: function() {
                count.text(zero.val.toFixed(decimals));
            }
        });
    });
    /***************************

    navigation

    ***************************/
    const showAnim = gsap.from('.mil-top-panel.mil-animated', {
        yPercent: -100,
        paused: true,
        duration: 0.4,
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
    });

    const showColor = document.querySelectorAll(".mil-top-panel.mil-transparent-nav");

    showColor.forEach((section) => {
        gsap.fromTo(
            section, {
                ease: 'sine',
                backgroundColor: 'rgba(38, 50, 56, 0)',
            }, {
                backgroundColor: variables.darkColor,
                scrollTrigger: {
                    start: "top -100, top",
                    end: 99999,
                    toggleClass: 'active',
                }
            }
        );
    });

    $(document).on('click', '.mil-menu-btn', function() {
        $(this).toggleClass('mil-active');
        $('.mil-mobile-dropdown').toggleClass('mil-active');
    });

    $(document).on('click', function(e) {
        const el = '.mil-top-panel';
        if ($(e.target).closest(el).length) return;
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-mobile-dropdown').removeClass('mil-active');
    });
    /***************************

    pseudo hover

    ***************************/
    $('.mil-pseudo-hover').addClass('mil-active');
    $('.mil-services-1').on('mouseover', function() {
        $('.mil-pseudo-hover').removeClass('mil-active');
    }).on('mouseout', function() {
        $('.mil-pseudo-hover').addClass('mil-active');
    });
    /***************************

    fields

    ***************************/
    $('input, textarea').on('blur', function() {
        var $this = $(this);
        if ($this.val() !== "") {
            $this.addClass('mil-keep');
            $this.parent('span').addClass('mil-keep');
        } else {
            $this.removeClass('mil-keep');
            $this.parent('span').removeClass('mil-keep');
        }

        /*
        if ( $this.attr('aria-invalid') === 'false' ) {
          $this.addClass('mil-valid');
          $this.parent('span').addClass('mil-valid');
        } else {
          $this.removeClass('mil-valid');
          $this.parent('span').removeClass('mil-valid');
        }*/
    });
    $('input, textarea').on('focusin', function() {
        var $this = $(this);
        if (!$this.hasClass('mil-focus')) {
            $this.addClass('mil-focus');
            $this.parent('span').addClass('mil-focus');
        }
    });
    $('input, textarea').on('focusout', function() {
        var $this = $(this);
        if ($this.hasClass('mil-focus')) {
            $this.removeClass('mil-focus');
            $this.parent('span').removeClass('mil-focus');
        }
    });
    /***************************

    slider

    ***************************/
    var swiper = new Swiper('.mil-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 450,
        touchStartPreventDefault: false,
        longSwipes: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
        },
    });
    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 3000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
        },
    });
    /***************************

    reviews slider

    ***************************/
    var swiper = new Swiper('.mil-reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 450,
        touchStartPreventDefault: false,
        longSwipes: true,
        pagination: {
            el: ".mil-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });
    /***************************

    instagram slider

    ***************************/
    var swiper = new Swiper('.mil-instagram-slider', {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 3000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });
    /***************************

    about slider

    ***************************/
    var swiper = new Swiper('.mil-about-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 450,
        initialSlide: 1,
        touchStartPreventDefault: false,
        longSwipes: true,
        navigation: {
            prevEl: '.mil-about-prev',
            nextEl: '.mil-about-next',
        },
        breakpoints: {
            992: {
                spaceBetween: 30,
                parallax: false,
            },
        },
    });
    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 450,
        slidesPerView: "auto",
        touchStartPreventDefault: false,
        longSwipes: true,
        navigation: {
            prevEl: '.mil-about-prev',
            nextEl: '.mil-about-next',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });
    /***************************

    gallery slider

    ***************************/
    var swiper = new Swiper('.mil-gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 450,
        slidesPerView: "auto",
        touchStartPreventDefault: false,
        longSwipes: true,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    //let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", function() {
            if ($(menu).parent().hasClass('mil-active')) {
                $(menu).parent().removeClass('mil-active');
                $(menu).next().css({
                    'max-height': '0px'
                });
            } else {
                $(menu).parent().addClass('mil-active');
                $(menu).next().css({
                    'max-height': $(menu).next().find('div').height() + 50
                });
            }
            setTimeout(function() {
                ScrollTrigger.refresh();
            }, 500);
            //toggleMenu(menu);
        });
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let minusElement = element.querySelector(".mil-accordion-minus");
        let plusElement = element.querySelector(".mil-accordion-plus");

        gsap.set(box, {
            height: "auto"
        });

        let animation = gsap
            .timeline()
            .from(box, {
                onComplete: function() {
                    ScrollTrigger.refresh();
                },
                height: 0,
                duration: 0.4,
                ease: "none"
            })
            .from(minusElement, {
                duration: 0.2,
                autoAlpha: 0,
                ease: "none"
            }, 0)
            .to(plusElement, {
                duration: 0.2,
                autoAlpha: 0,
                ease: "none"
            }, 0)
            .reverse();

        return function(clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }

    /*-------------------------
    Magnific Popups
    -------------------------*/
    if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.wp-block-gallery .blocks-gallery-item:first a').attr('href'))) {
        $('.wp-block-gallery a').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image',
            closeOnContentClick: false,
            fixedContentPos: false,
            closeBtnInside: false,
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'mfp-zoom-in';
                }
            },
        });
    }
    $('[data-magnific-inline]').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        preloader: false,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = 'mfp-zoom-in';
            }
        },
    });
    $('[data-magnific-image]').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        fixedContentPos: false,
        closeBtnInside: false,
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-zoom-in';
            }
        },
    });
    if (!$('body').hasClass('elementor-page')) {
        $("a").each(function(i, el) {
            var href_value = el.href;
            if (/\.(jpg|png|gif)$/.test(href_value)) {
                $(el).magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    fixedContentPos: false,
                    closeBtnInside: false,
                    callbacks: {
                        beforeOpen: function() {
                            // just a hack that adds mfp-anim class to markup
                            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass = 'mfp-zoom-in';
                        }
                    },
                });
            }
        });
    }
    $('[data-magnific-video]').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube_short: {
                    index: 'youtu.be/',
                    id: 'youtu.be/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('iframe').attr('allow', 'autoplay');
            },
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-zoom-in';
            }
        },
    });
    $('[data-magnific-music]').magnificPopup({
        type: 'iframe',
        preloader: false,
        fixedContentPos: false,
        closeBtnInside: true,
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-zoom-in';
            }
        },
    });
    $('[data-magnific-gallery]').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image',
        closeOnContentClick: false,
        fixedContentPos: false,
        closeBtnInside: false,
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-zoom-in';
            }
        },
    });

})(jQuery);

function cursorInit() {

    const cursor = document.querySelector('.mil-cursor');
    const cursorWord1 = document.querySelector('.mil-cursor .mil-word-1');
    const cursorWord2 = document.querySelector('.mil-cursor .mil-word-2');
    const cursorIcon1 = document.querySelector('.mil-cursor .mil-icon-1');
    const cursorIcon2 = document.querySelector('.mil-cursor .mil-icon-2');
    const cursorIcon3 = document.querySelector('.mil-cursor .mil-icon-3');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    //follower
    document.addEventListener('pointermove', (event) => {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: event.clientX,
            y: event.clientY,
        });
    });

    //click and drag
    const body = document.querySelector('body');

    body.addEventListener('mousedown', (event) => {
        gsap.to(cursor, .2, {
            scale: .7,
            boxShadow: '0px 0px 0px 10px rgba(255,255,255,.4)',
            ease: 'sine',
        });
    });
    body.addEventListener('mouseup', (event) => {
        gsap.to(cursor, .2, {
            scale: 1,
            boxShadow: '0px 0px 0px 5px rgba(255,255,255,0)',
            ease: 'sine',
        });
    });

    //accent color
    const accent = document.querySelectorAll('.mil-accent-trigger');
    if (accent != undefined) {
        accent.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.accentColor,
                    ease: 'sine',
                });
                cursor.classList.add("mil-active");
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //light color
    const light = document.querySelectorAll('.mil-light-trigger');
    if (light != undefined) {
        light.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.lightColor,
                    ease: 'sine',
                });
                cursor.classList.add('mil-dark');
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    background: variables.darkColor,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-dark');
            });
        });
    }

    //hidden
    const hidden = document.querySelectorAll('.mil-hidden-trigger');
    if (hidden != undefined) {
        hidden.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 0,
                    height: 0,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale down
    const scale_down = document.querySelectorAll('.mil-scale-down-trigger');
    if (scale_down != undefined) {
        scale_down.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 10,
                    height: 10,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale up
    const scale_up = document.querySelectorAll('.mil-scale-up-trigger');
    if (scale_up != undefined) {
        scale_up.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //scale up with word and icons
    const scale_up_all = document.querySelectorAll('.mil-word-1-trigger, .mil-word-2-trigger, .mil-icon-1-trigger, .mil-icon-2-trigger, .mil-icon-3-trigger');
    if (scale_up_all != undefined) {
        scale_up_all.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 75,
                    height: 75,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: 'sine',
                });
            });
        });
    }

    //word 1
    const word1 = document.querySelectorAll('.mil-word-1-trigger');
    if (word1 != undefined) {
        word1.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //word 2
    const word2 = document.querySelectorAll('.mil-word-2-trigger');
    if (word2 != undefined) {
        word2.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorWord2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 1
    const icon1 = document.querySelectorAll('.mil-icon-1-trigger');
    if (icon1 != undefined) {
        icon1.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                console.log('over');
                gsap.to(cursorIcon1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                console.log('leave');
                gsap.to(cursorIcon1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 2
    const icon2 = document.querySelectorAll('.mil-icon-2-trigger');
    if (icon2 != undefined) {
        icon2.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }

    //icon 3
    const icon3 = document.querySelectorAll('.mil-icon-3-trigger');
    if (icon3 != undefined) {
        icon3.forEach((element) => {
            element.addEventListener('mouseover', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: 'sine',
                });
            });
            element.addEventListener('mouseleave', (event) => {
                gsap.to(cursorIcon3, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: 'sine',
                });
            });
        });
    }
}