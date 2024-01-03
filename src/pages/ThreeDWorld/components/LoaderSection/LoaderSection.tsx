import React from "react";
import "./loaderSectionStyle.css";

export const LoaderSection: React.FC = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center  bg-[#bdd4f7]">
      <div className="loading font-bold text-center text-[74px] md:text-[84px]">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <br />
        <span>I</span>
        <span>S</span>
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
      </div>
    </section>
  );
};
