import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg font-medium mb-2">Job Experience</h2>
    <div className="flex gap-3">
      <p>2022.10 - 2023-12</p>
      <p className="font-medium">Mobile Engineer @Kilo Health</p>
    </div>
    <p className="font-medium">
      I co-built an amazing app from scratch together with a senior-level
      colleague. It now serves up to 150k users. 📱 Not only did the technical
      implementation, but I was also deeply involved in the product development
      process as well.
    </p>
    <div className="flex gap-3 mt-3">
      <p>2021.02 - 2022-10</p>
      <p className="font-medium">Front-end Engineer @Kilo Health</p>
    </div>
    <p className="font-medium">
      🔧 Developed 13 sales funnels from scratch, leading 5 of them. 🎨 Led the
      rebranding process for two products from a Front-end perspective. 💻
      Created a web app from scratch, catering to up to 30k users. I took the
      lead on the front-end part to ensure a smooth release process.
    </p>
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

export const JobExpPopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
  return (
    <>
      <div className="absolute top-28 md:right-28 sm:left-auto -left-5 z-10 md:max-w-xxl max-w-l">
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onOkClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
