import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BenifitsOfCycle() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".lists"),
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "ease",
        reverse: true,
        scrollTrigger: {
          trigger: element.querySelector(".triggered"),
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
        reverse: true,
        scrollTrigger: {
          trigger: element.querySelector(".triggered"),
        },
      }
    );
  }, []);

  return (
    <>
      <div className="row p-lr-50 " ref={ref}>
        <div className="col-12 triggered  ">
          <div className="text-center mb-5">
            <h2 className="title-underline capitalize ">
              Benifits Of<span className="t-orange"> Cycling</span>
            </h2>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 col-12 order-2 my-auto ">
          <ul className="style_ul lists">
            <li>
              <p className="lists bolder"> Increased cardiovascular fitness.</p>
            </li>

            <li>
              <p className="lists bolder">
                Increased muscle strength and flexibility.
              </p>
            </li>

            <li>
              <p className="lists bolder">Improved joint mobility.</p>
            </li>

            <li>
              <p className="lists bolder">Decreased stress levels.</p>
            </li>

            <li>
              <p className="lists bolder">Improved posture and coordination.</p>
            </li>
            <li>
              <p className="lists bolder">Strengthened bones.</p>
            </li>
            <li>
              <p className="lists bolder">Decreased body fat levels.</p>
            </li>
            <li>
              <p className="lists bolder">
                Prevention or management of disease.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-12 col-12 order-1">
          <img
            className="img-fluid image"
            src="https://mybyk.in/wp-content/uploads/2020/02/faq-cycle-image-min.png"
            alt="cycle"
          />
        </div>
      </div>
    </>
  );
}

export default BenifitsOfCycle;
