import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <p className="mb-3">
      Hello, my name is <b>Ieva</b>. 👩‍💻
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
    Let's check it out!
  </button>
);

export const IntroPopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
  return (
    <>
      <div className="absolute md:top-28 top-3 md:left-0 -left-5 right-0 z-10 max-w-md">
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
