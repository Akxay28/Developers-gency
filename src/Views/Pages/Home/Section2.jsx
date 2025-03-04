import React, { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Aos from 'aos';


gsap.registerPlugin(ScrollTrigger);

Aos.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: false, // Animation happens only once
    offset: 100, // Trigger animation when 200px from the viewport
});

const Section2 = () => {
    const scrollref = useRef(null);

    // useEffect(() => {
    //     // Initialize locomotive scroll
    //     const scroll = new locomotiveScroll({
    //         el: scrollref.current,
    //         smooth: true,
    //         multiplier: 1.2, // Optional, you can adjust smoothness
    //     });

    //     // Cleanup the locomotive scroll instance on unmount
    //     return () => {
    //         if (scroll) {
    //             scroll.destroy();
    //         }
    //     };
    // }, []);

    useEffect(() => {
        // Ensure ScrollTrigger works with locomotive-scroll
        // ScrollTrigger.scrollerProxy(scrollref.current, {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             scrollref.current.scrollTop = value; // Set the scroll position
        //         }
        //         return scrollref.current.scrollTop; // Get the scroll position
        //     },
        // });

        // Create animation with gsap and scrollTrigger
        gsap.from('.Whatwedo', {
            duration: 2,
            y: 200,
            scale: 3,

            scrollTrigger: {
                trigger: '.Whatwedo',
                scrub: true,
                // markers: true,
                scroller: 'body',
                start: 'top  0%',
                end: 'bottom  0%',
            },
        });

        gsap.to('.Whatwedo', {
            duration: 2,
            y: 0,
            scale: 1.2,
            scrollTrigger: {
                trigger: '.Whatwedo',
                scrub: true,
                // markers: true,
                scroller: 'body', // Set scroller to the locomotive-scroll container
                start: 'top 80%',
                end: 'bottom 0%',
                // toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <section id='section2' ref={scrollref} className='section2 py-5'>
            <div className="container-fluid p-5">
                <p
                    className='mt-5 mb-5 py-5 text-center display-1 Whatwedo text-light fw-bolder'
                >
                    What We Do
                </p>
                <div className="row mt-5   py-3">
                    <div className="col-lg-4 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div
                            className="container border  py-3"
                            style={{ backgroundColor: '#f4cce9c5', borderRadius: '35px' }}
                        >
                            <p className='display-3 fw-bolder'>
                                Design & Branding
                            </p>
                            <p className='fs-3' style={{ color: "#DCD7C9" }}>
                                From logo creation to full-scale branding strategies, we design visuals that captivate and make your brand impossible to ignore!
                            </p>
                            <img src="designBranding.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="row d-flex flex-column py-5">
                            <div className="col-lg-12" data-aos="zoom-in" data-aos-duration="1000">
                                <div
                                    className="container mb-5 border"
                                    style={{ backgroundColor: '#fcf951', borderRadius: '35px' }}
                                >
                                    <div className="row">
                                        <div className="col-lg-8 py-5">
                                            <p className='display-3 fw-bolder'>
                                                Web Development
                                            </p>
                                            <p>
                                                We build websites and apps that don’t just look good but perform flawlessly. Our development services are tailored to deliver robust, scalable, and user-friendly solutions for businesses of all sizes. From concept to deployment, we’ve got you covered!
                                            </p>
                                        </div>
                                        <div className="col-lg-4">
                                            <img src="webDev.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="800">
                                    <div
                                        className="container border"
                                        style={{ backgroundColor: '#2bc0e4', borderRadius: '35px' }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 py-3 mt-5">
                                                <p className='display-5 fw-bolder'>
                                                    UI/UX
                                                </p>
                                                <p style={{ color: '#EAECC6' }}>
                                                    From Figma prototypes to design systems and micro interactions, we got you covered. Our UI/UX services are designed to create seamless user experiences that drive engagement and conversions.
                                                </p>
                                            </div>
                                            <div className="col-lg-6 ">
                                                <img src="uiux.png" alt="" className='img-fluid h-100 w-100' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6" data-aos="zoom-out" data-aos-duration="800">
                                    <div
                                        className="container border"
                                        style={{ backgroundColor: '#06d69ed3', borderRadius: '35px' }}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 py-3 mt-5">
                                                <p className='display-5 fw-bolder text-light'>
                                                    SEO
                                                </p>
                                                <p style={{ color: '#f8ffe5' }}>
                                                    From Figma prototypes to design systems and micro interactions, we got you covered. Our UI/UX services are designed to create seamless user experiences that drive engagement and conversions.
                                                </p>
                                            </div>
                                            <div className="col-lg-6 py-5">
                                                <img src="seo.png" alt="" className='img-fluid h-100 w-100' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
