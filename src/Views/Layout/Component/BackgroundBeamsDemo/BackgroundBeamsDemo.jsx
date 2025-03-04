"use client";
import React, { useEffect } from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Timeline } from "gsap/gsap-core";



gsap.registerPlugin(ScrollTrigger);

export function BackgroundBeamsDemo() {

    useEffect(() => {
        const el = gsap.timeline({
            scrollTrigger: {
                trigger: '.stepslaunch',
                scrub: 5,
                markers: true,
                scroller: 'body', // Set scroller to the locomotive-scroll container
                start: 'top 0%',    // when the top of the trigger hits the top of the viewport
                end: 'bottom 0%',  // when the bottom of the trigger hits the bottom of the viewport
            },
        });


        el.from('.stepslaunch', {
            duration: 2,
            scale: 2.5,

            scrollTrigger: {
                trigger: '.stepslaunch',
                scrub: 5,
                markers: true,
                scroller: 'body',
                start: 'top  0%',
                end: 'bottom  0%',
            },
        });

        el.to('.stepslaunch', {
            duration: 2,
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: '.stepslaunch',
                scrub: 5,
                markers: true,
                scroller: 'body', // Set scroller to the locomotive-scroll container
                start: 'top 80%',
                end: 'bottom 0%',
                // toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        (<div style={{ backgroundColor: "black" }}
            className="h-[60rem] w-full  relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <p
                    className='mt-5 mb-5 py-5 text-center display-1 stepslaunch text-light fw-bolder'
                >
                    Steps to launch your project
                </p>
                <p></p>
                <p
                    className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business. Whether you&apos;re sending order confirmations,
                    password reset emails, or promotional campaigns, MailJet has got you
                    covered.
                </p>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
            </div>
            <BackgroundBeams />
        </div>)
    );
}
