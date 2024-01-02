import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";
import { SocialMedia } from "src/constants/contacts";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg font-medium mb-2">Contact details</h2>
    <p className="mb-3">
      email:{" "}
      <a href="mailto:ieva.kaleginiene@gmail.com">ieva.kaleginiene@gmail.com</a>
    </p>
    <p>
      you will find more my content{" "}
      <a href={SocialMedia.linkedin} target="_blank" className="font-bold">
        on Linkedin
      </a>
    </p>
  </>
);

interface CtaBoxProps {
  onClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onClick }) => (
  <button onClick={onClick} className="neo-brutalism-white dark-3d-btn">
    <a href={SocialMedia.linkedin} target="_blank">
      Let's connect
    </a>
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
