import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";
import { SocialMedia } from "src/constants/contacts";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg font-bold mb-2">Contact details</h2>
    <p className="mb-3">
      email:{" "}
      <a className="font-bold" href="mailto:ieva.kaleginiene@gmail.com">
        ieva.kaleginiene@gmail.com
      </a>
    </p>
    <p>
      more my professional content you will find{" "}
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
      <div className="absolute md:top-28 top-14 md:left-0 left-[-15px] right-0 z-10 md:max-w-md max-w-[98%]">
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
