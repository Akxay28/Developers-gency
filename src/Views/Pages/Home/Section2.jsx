import React, { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { body } from 'framer-motion/client';

gsap.registerPlugin(ScrollTrigger);  // Register ScrollTrigger plugin

const Section2 = () => {
    const scrollref = useRef(null);

    useEffect(() => {
        // Initialize locomotive scroll
        const scroll = new locomotiveScroll({
            el: scrollref.current,
            smooth: true,
            multiplier: 1.2, // Optional, you can adjust smoothness
        });

        // Cleanup the locomotive scroll instance on unmount
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // Ensure ScrollTrigger works with locomotive-scroll
        ScrollTrigger.scrollerProxy(scrollref.current, {
            scrollTop(value) {
                if (arguments.length) {
                    scrollref.current.scrollTop = value; // Set the scroll position
                }
                return scrollref.current.scrollTop; // Get the scroll position
            },
        });

        // Create animation with gsap and scrollTrigger
        gsap.from('.Whatwedo', {
            duration: 2,
            y: 200,
            scale: 3,

            scrollTrigger: {
                trigger: '.Whatwedo',
                scrub: 1.5,
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
                scrub: 1.5,
                // markers: true,
                scroller: 'body', // Set scroller to the locomotive-scroll container
                start: 'top 80%',
                end: 'bottom 60%',
                // toggleActions: 'play none none reverse',
            },
        });


    }, []);

    return (
        <section id='section2' ref={scrollref} className='section2 py-5'>
            <div className="container">
                <p className='mt-5 text-center  display-1 Whatwedo text-light fw-bolder' data-scroll data-scroll-speed="1">
                    What We Do
                </p>
            </div>
        </section>
    );
};

export default Section2;
