import React, { useContext, useEffect } from "react";
import Aboutmain from "./Aboutmain";
import BenifitsOfCycle from "./BenifitsOfCycle";
import CycleContext from "../../context/Cycle/CycleContext";
import CycleCard from "./CycleCard";

function Cards() {
  const { cycles } = useContext(CycleContext);
  return (
    <>
      <div className="container-fluid pt-50">
        <Aboutmain />
        {/* card section */}
        <div className="card-section mt-4">
          <div className="row text-center">
            <h2 className="title-underline capitalize">
              Best<span className="t-orange"> Ones</span>
            </h2>
          </div>
          <div className="row pt-50 ">
            {/* 2 card */}
            {cycles &&
              cycles.map((cycle) => (
                <CycleCard key={cycle._id} cycle={cycle} />
              ))}
            {/* <CycleCard /> */}
          </div>
        </div>
        <BenifitsOfCycle />
      </div>
    </>
  );
}

export default Cards;
