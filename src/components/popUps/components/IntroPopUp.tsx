import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <p className="mb-3">
      Hello, my name is <b>Ieva</b>. I am Lithuanian JavaSript girl based in
      Vilnius 👩‍💻
    </p>
    <p>
      Welcome to my 3D world! Here You will find everything about my profesional
      life.
    </p>
  </>
);

interface CtaBoxProps {
  onClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onClick }) => (
  <button onClick={onClick} className="neo-brutalism-white neo-btn">
    Check it out!
  </button>
);

export const IntroPopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
  return (
    <>
      <div className="absolute md:top-28 top-20 md:left-0 -left-5 right-0 z-10 md:max-w-md w-[93%]  md:w-full mx-3">
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
