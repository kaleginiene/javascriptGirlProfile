import React from "react";
import { BasePopUp } from "./BasePopPup";
import { PopUpProps } from "../popUpTypes";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes/routeNames";

const TextBox: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => (
  <>
    {isDesktop ? (
      <p>
        To move the 3D model you can use touch pad, keyboard arrows ( ←, → ) or
        a mouse
      </p>
    ) : (
      <p>To move the 3D model spin it around SLOWLY </p>
    )}
  </>
);

interface CtaBoxProps {
  onClassicCVClick: () => void;
  onOkClick: () => void;
}

const CtaBox: React.FC<CtaBoxProps> = ({ onClassicCVClick, onOkClick }) => (
  <div className="flex w-full gap-10">
    <button
      onClick={onClassicCVClick}
      className="neo-brutalism-white dark-3d-btn"
    >
      Give me a classic CV
    </button>
    <button onClick={onOkClick} className="neo-brutalism-white dark-3d-btn">
      Let's fly
    </button>
  </div>
);

export const InstructionsPopUp: React.FC<PopUpProps> = ({
  onNextButtonClick,
}) => {
  const navigate = useNavigate();
  const isDesktop: boolean = window.screen.width > 768;

  const navigateToProfilePage = (): void => {
    navigate(RouteNames.home);
  };

  return (
    <>
      <div className="absolute md:top-28 top-3 md:left-0 -left-5  right-0 z-10 max-w-md">
        <BasePopUp
          textBox={<TextBox isDesktop={isDesktop} />}
          ctaBox={
            <CtaBox
              onClassicCVClick={navigateToProfilePage}
              onOkClick={onNextButtonClick}
            />
          }
        />
      </div>
    </>
  );
};
