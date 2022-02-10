import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Aboutmain() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".text"),
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".home-about"),
          start: "top top",
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".image"),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "ease",
        scrollTrigger: {
          trigger: element.querySelector(".home-about"),
          start: "top top",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="home-about section" ref={ref}>
        <div className="row text-center ">
          <h2 className="title-underline capitalize">
            About<span className="t-orange"> MYBYK</span>
          </h2>
        </div>
        <div className="row p-lr-50 mt-4">
          <div className="col-sm-12 col-md-12 col-12 col-lg-4 col-xl-4">
            <img
              src="https://content.jdmagicbox.com/comp/ahmedabad/m4/079pxx79.xx79.161117204233.n9m4/catalogue/mybyk-terminal-shivranjani-brts-ahmedabad-bicycle-on-hire-r1zqlw2k2r.jpg"
              alt="home page cycle"
              className="img-fluid image"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-12 col-lg-8 col-xl-8 my-auto">
            <p className="text bolder">
              Renting a bike is by far the best way to discover the city of
              Ahmedabad. It's fun, healthy, sustainable and utterly functional
              in a compact city like Ahmedabad! The main purpose of this project
              is to provide cycle facilities of user who don’t have their own
              vehicle and the people who want to reach their destination which
              cover short distance. We think about users who need easy and cheap
              transportation. So, here we are giving some services behalf of the
              transportation service
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmain;
