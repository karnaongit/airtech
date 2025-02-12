'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power2, Power4 } from 'gsap';
import { useState } from "react";
import Preloader from "@/components/Preloader"; // Adjust path as needed

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loader timeout (or remove when GSAP animation completes)
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      // Animate main content fade-in
      gsap.fromTo(
        "#main-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, [isLoading]);
  useEffect(() => {
    // Initialize animations
    homePageAnimation();
    realPageAnimaton();
    teamPageAnimation();
    paraAnimation();
    capsulePageAnimaton();
    bodyColorChange();
  }, []);

  const homePageAnimation = () => {
    gsap.set(".slidesm", { scale: 2 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    tl.to(
      ".vdodiv",
      {
        "--clip": "0%",
        ease: Power2,
      },
      "a"
    )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
  };

  const realPageAnimaton = () => {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: -210,
      ease: Power4,
    });
  };

  const teamPageAnimation = () => {
    document.querySelectorAll(".listelem").forEach((el) => {
      el.addEventListener("mousemove", (dets) => {
        gsap.to(el.querySelector(".picture"), {
          opacity: 1,
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
          ease: Power4,
          duration: 0.5,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el.querySelector(".picture"), {
          opacity: 0,
          ease: Power4,
          duration: 0.5,
        });
      });
    });
  };

  const paraAnimation = () => {
    const textElement = document.querySelector(".textpara");
    if (!textElement) return;

    const clutter = textElement.textContent
      .split("")
      .map((e) => (e === " " ? `<span>&nbsp;</span>` : `<span>${e}</span>`))
      .join("");

    textElement.innerHTML = clutter;

    gsap.set(".textpara span", { opacity: 0.1 });
    gsap.to(".textpara span", {
      scrollTrigger: {
        trigger: ".textpara",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 2,
      },
      opacity: 1,
      stagger: 0.03,
      ease: Power4,
    });
  };

  const capsulePageAnimaton = () => {
    gsap.to(".capsule:nth-child(2)", {
      scrollTrigger: {
        trigger: ".capsules",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
      y: 0,
      ease: Power4,
    });
  };

  const bodyColorChange = () => {
    document.querySelectorAll(".section").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", e.dataset.color);
        },
      });
    });
  };

  return (
    <>
     <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
       (<div ref={containerRef} className="main w-full">
      {/* Hero Section */}
      <div data-color="black" className="home section w-full h-[200vh] relative">
        <div className="w-full sticky top-0 left-0">
          <div className="btmtext absolute z-[4] w-52 font-semibold bottom-[7%] left-[3%]">
            <h1>We build big ideas. <br />
              Software. Apps. Tools. <br />
              For real people. Real lives.</h1>
          </div>
          <div style={{ "--clip": "100%" }}
            className="vdodiv w-full h-screen z-[3] absolute top-0 left-0 bg-black overflow-hidden">
            <img
              className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/ball-Photoroom.jpg"
              alt="Hero"
            />
          </div>
          <div className="marqueecontainer w-full h-screen relative overflow-hidden">
            <div className="heading w-72 font-semibold text-center absolute top-[7%] left-1/2 -translate-x-1/2">
              <h1 className="text-xl font-regular"><br/>Crafting a new paradigm of healthcare, one that is</h1>
            </div>
            
            <div className="slidesm absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
              {/* Marquee content goes here - shortened for brevity */}
              <div className="row lft -translate-x-1/2 w-full flex items-center gap-10 whitespace-nowrap">
                {/* Marquee items */}
                ok
              </div>
              <div className="row rgt -translate-x-3/4 w-full flex items-center gap-10 whitespace-nowrap">
                {/* Marquee items */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {/* Craft Section */}
      <div data-color="cyan" className="craft section w-full px-10 py-10 flex justify-between items-start gap-10 relative">
        <div className="ltext w-[40%] sticky top-0 left-0">
          <p className="text-md font-semibold">
            Significo is a custom health software developer founded on the belief that technology can transform healthcare to put people first. We put humanity back at the center of healthcare by simplifying complexity, accelerating capacity, and improving outcomes.
          </p>
          <h1 className="text-7xl font-light mt-6 font-[Pp Neue Machina]">We Craft Human-Centric Health Software</h1>
          <div className="w-fit px-10 py-3 border-[0.2px] border-[--dcyan] mt-10">
            <div className="masker overflow-hidden">
              <span className="inline-block uppercase text-sm font-semibold">Our Solutions</span>
            </div>
          </div>
        </div>
        <div className="cards w-1/2 bg-red-600"></div>
      </div>

      {/* Testimonial Section */}
      <div data-color="black" className="para section w-full h-[70vh] flex items-center justify-center">
        <div className="text w-[70%] flex flex-col items-center justify-center">
          
          <div className="pers mt-10 flex flex-col items-center justify-center gap-5">
            <div className="image w-80 h-80 rounded-full overflow-hidden bg-red-600"></div>
            <h1 className="text-3xl">Miranda Ernst</h1>
            <h3>Product Manager @ HealthCheck@360</h3>
          </div>
          <h3 className="textpara text-2xl text-center leading-[2rem]">
            Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind...
          </h3>
        </div>
      </div>

      {/* Capsules Section */}
      <div data-color="white" className="capsules section w-full h-screen flex items-center justify-between mt-60 px-28">
        <div className="left w-1/4 flex flex-col justify-between h-full py-10">
          <h1 className="text-2xl font-regular">Stay up-to-date on the latest healthcare innovations and thought leadership.</h1>
          <div className="heading">
            <h1 className="text-5xl font-[Pp Neue Machina]">Explore Our Insights</h1>
            <div className="w-fit px-8 py-2 border-[0.2px] border-[--dcyan] mt-8">
              <div className="masker overflow-hidden">
                <span className="inline-block uppercase text-sm font-semibold">View All Articles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right font-[Pp Neue Machina] h-full flex items-center gap-12">
          {[1, 2].map((item, index) => (
            <div key={index} className={`capsule ${index === 1 ? 'translate-y-40' : ''} -rotate-[16deg] flex flex-col items-center p-7 rounded-full border-[1px] border-black`}>
              <div className="w-60 h-60 bg-blue-600 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={index === 0 ? "/assets/img1.png" : "/assets/img2.png"} alt="Capsule Image" />
              </div>
              <div className="text text-center mt-10">
                <h3 className="text-2xl">Equity in Tech: An</h3>
                <h3 className="text-2xl">International Women's</h3>
                <h3 className="text-2xl">Day Conversation with</h3>
                <h3 className="text-2xl">Caroline Nieto,</h3>
                <h3 className="text-2xl">Significo's CFO</h3>
              </div>
              <button className="bg-purple-400 text-purple-900 font-bold px-4 py-2 mb-10 rounded-full text-sm mt-12">Thought Leadership</button>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* Rest of the sections - implementation continues with the same structure */}
      {/* Each section follows the same pattern as the HTML but adapted for React/Next.js */}
    </div>)
    </div>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
    </>
  );
}