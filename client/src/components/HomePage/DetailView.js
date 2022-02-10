import Form from "../Layout/Form";
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

// import {scrollTrigger} from "gsap/scrollTrigger";

function DetailView() {
  const ref = useRef(null);
  const location = useLocation();

  const cycle = location.state;

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
        scrub: true,
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
        scrub: true,
      }
    );
  }, []);

  return (
    <>
      <div className="container-fluid " ref={ref}>
        <div className="row pt-50 ">
          <div className="col-12 mb-5">
            <div className="details-title text-center">
              <h2 className="title-underline">
                Detail <span className="t-orange">view</span>
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6">
            <div className="detail_view_image_wrapper">
              <img
                className="img-fluid image"
                src={cycle && cycle.image_url}
                alt="detail_view"
              ></img>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 my-auto">
            <div className="detail_view_main_details">
              <p className="text bolder">
                Renting a bike is by far the best way to discover the city of
                Ahmedabad. It's fun, healthy, sustainable and utterly functional
                in a compact city like Ahmedabad! The main purpose of this
                project is to provide cycle facilities of user who don’t have
                their own vehicle and the people who want to reach their
                destination which cover short distance. We think about users who
                need easy and cheap transportation. So, here we are giving some
                services behalf of the transportation service
              </p>
            </div>
          </div>
        </div>

        <div>
          <Form cycle={cycle && cycle} />
        </div>
      </div>
    </>
  );
}

export default DetailView;
