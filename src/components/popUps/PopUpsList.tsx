import React, { useEffect, useState } from "react";
import {
  AboutMePopUp,
  InstructionsPopUp,
  IntroPopUp,
  JobExpPopUp,
  SideWorkPopUp,
} from "./components";
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
    } else if (currentStage === 2) {
      setCurrentPopUpKey(AvailablePopUps.jobExperience);
    } else if (currentStage === 3) {
      setCurrentPopUpKey(AvailablePopUps.sideWork);
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
        <InstructionsPopUp
          onNextButtonClick={() =>
            setCurrentPopUpKey(AvailablePopUps.jobExperience)
          }
        />
      )}
      {currentPopUpKey === AvailablePopUps.aboutMe && (
        <AboutMePopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
      {currentPopUpKey === AvailablePopUps.jobExperience && (
        <JobExpPopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
      {currentPopUpKey === AvailablePopUps.sideWork && (
        <SideWorkPopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
    </>
  );
};
