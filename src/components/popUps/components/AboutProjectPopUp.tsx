import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";
import { GithubLinks, SocialMedia } from "src/constants/contacts";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg text-center font-bold mb-2">About this project</h2>
    <p className="mb-3">
      I created this project to show my professional life insights in a
      different way. Utilizing Vite + React as the core framework and enhancing
      aesthetics with TailWind CSS, this digital showcase offers a unique
      perspective on my professional journey. The dynamic 3D models, brought to
      life by the Three.js library, intuitively respond to your gestures,
      enabling a captivating exploration of various aspects of my career.👩🏼‍💻
    </p>
    <p className="mb-3">
      As a personal challenge, I took on the entire design process. From
      sourcing the perfect 3D models to harmonizing colors and crafting the
      layout, every element reflects my creative vision. 🎨
    </p>
    <p>
      Check out the code in the{" "}
      <a
        href={GithubLinks.repoOfTheProject}
        target="_blank"
        className="font-bold"
      >
        GitHub repository
      </a>
      .
    </p>
  </>
);

interface CtaBoxProps {
  onClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onClick }) => (
  <button onClick={onClick} className="neo-brutalism-white dark-3d-btn">
    <a href={SocialMedia.linkedin} target="_blank">
      OK
    </a>
  </button>
);

export const AboutProjectPopUp: React.FC<PopUpProps> = ({
  onNextButtonClick,
}) => {
  return (
    <>
      <div className="absolute md:top-28 top-14 md:left-14 left-[-15px] right-0 z-10 md:max-w-xxl max-w-[98%]">
        <BasePopUp
          hideImage
          textBox={<TextBox />}
          ctaBox={<CtaBox onClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
