import React, { useEffect, useState } from "react";
import { AboutMePopUp, InstructionsPopUp, IntroPopUp } from "./components";
import { AvailablePopUps } from "./popUpTypes";

interface PopUpsListProps {
  currentStage: number | null;
}

export const PopUpsList: React.FC<PopUpsListProps> = ({ currentStage }) => {
  const [currentPopUpKey, setCurrentPopUpKey] =
    useState<AvailablePopUps | null>(AvailablePopUps.initial);

  useEffect(() => {
    if (currentStage === 1 && currentPopUpKey !== AvailablePopUps.initial) {
      setCurrentPopUpKey(AvailablePopUps.aboutMe);
    }
  }, [currentStage]);

  return (
    <>
      {currentPopUpKey === AvailablePopUps.initial && (
        <IntroPopUp
          onNextButtonClick={() =>
            setCurrentPopUpKey(AvailablePopUps.instructions)
          }
        />
      )}
      {currentPopUpKey === AvailablePopUps.instructions && (
        <InstructionsPopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
      {currentPopUpKey === AvailablePopUps.aboutMe && (
        <AboutMePopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
    </>
  );
};
