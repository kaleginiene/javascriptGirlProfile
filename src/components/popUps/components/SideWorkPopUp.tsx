import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";

const TextBox: React.FC = () => (
  <>
    <h2 className="text-lg font-bold mb-2">Side Work</h2>
    <div className="flex gap-3">
      <p>2023.04 - 2023-10</p>
      <p className="font-bold">Mentor @Women Go Tech</p>
    </div>
    <p className="font-medium">
      Mentoring for two mentees with different goals: - Reach a hirable level; -
      Give guidance on the latest tools and find a job.
    </p>{" "}
    <div className="flex gap-3 mt-3">
      <p>2021.09 - 2022-06</p>
      <p className="font-bold">React JS Lecturer @Kilo Academy</p>
    </div>
    <p className="font-medium">
      I've lectured React JS for 20 students in total (two batches of 10).
      Prepared all the teaching materials, candidate selection for the Academy,
      lecturing. More than 100 hours of lecturing!
    </p>
    <div className="flex gap-3 mt-3">
      <p>2021.08 - 2022-08</p>
      <p className="font-bold">Freelance Front-end Engineer</p>
    </div>
    <p className="font-medium">
      Created simple web sales platforms using React or NextJS.
    </p>
  </>
);

interface CtaBoxProps {
  onOkClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onOkClick }) => (
  <button onClick={onOkClick} className="neo-brutalism-white dark-3d-btn">
    NICE!
  </button>
);

export const SideWorkPopUp: React.FC<PopUpProps> = ({ onNextButtonClick }) => {
  return (
    <>
      <div
        className={`absolute top-28 md:left-[200px] z-10 md:max-w-xxl left-[-15px] mx-2 w-[95%] md:w-full`}
      >
        <BasePopUp
          textBox={<TextBox />}
          ctaBox={<CtaBox onOkClick={onNextButtonClick} />}
        />
      </div>
    </>
  );
};
