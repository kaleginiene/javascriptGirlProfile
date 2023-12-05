import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg font-medium mb-2">Contact details</h2>
    <p className="mb-3">
      email:{" "}
      <a href="mailto:ieva.kaleginiene@gmail.com">ieva.kaleginiene@gmail.com</a>
    </p>
    <p>
      you will find more my content{" "}
      <a
        href="https://www.linkedin.com/in/ieva-kaleginiene/"
        target="_blank"
        className="font-bold"
      >
        on Linkedin
      </a>
    </p>
  </>
);

interface CtaBoxProps {
  onClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onClick }) => (
  <button onClick={onClick} className="neo-brutalism-white neo-btn">
    Let's connect
  </button>
);

export const ContactsPopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
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
