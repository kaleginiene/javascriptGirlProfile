import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <p>After ~9 years in sales (😱), I switched my career to programming. 👩‍💻</p>
    <p className="mb-2">
      I've been coding 4 years with JavaScript and still can't get enough.
    </p>
    <p className="mb-1 font-bold">My Tech Stack:</p>
    <ul>
      <li className="list-disc">JavaSript/ TypeScript</li>
      <li className="list-disc">React/ React Native/ Next JS/ Gatsby JS</li>
      <li className="list-disc">
        CSS/ SCSS/ styled-components/ Tailwind/ Material UI
      </li>
      <li className="list-disc">Jest/ Redux/ Axios / i18next/ Three.js</li>
      <li className="list-disc">GitLab / BitBucket/ GitHub</li>
      <li className="list-disc">Instabug/ Sentry</li>
      <li className="list-disc">Figma</li>
      <li className="list-disc">Firebase</li>
    </ul>
  </>
);

interface CtaBoxProps {
  onOkClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onOkClick }) => (
  <button onClick={onOkClick} className="neo-brutalism-white dark-3d-btn">
    Got IT!
  </button>
);

export const AboutMePopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
  return (
    <>
      <div
        className={`absolute top-14 md:left-28 left-[-15px] right-0 z-10 md:max-w-xxl max-w-[98%]`}
      >
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onOkClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
