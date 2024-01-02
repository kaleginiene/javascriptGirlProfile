import React, { useEffect } from "react";
import {
  AboutMePopUp,
  AboutProjectPopUp,
  InstructionsPopUp,
  IntroPopUp,
  JobExpPopUp,
  SideWorkPopUp,
} from "./components";
import { AvailablePopUps } from "./popUpTypes";
import { ContactsPopUp } from "./components/ContactsPopUp";
import { usePopUps } from "./usePupUps";

interface PopUpsListProps {
  currentStage: number | null;
}

export const PopUpsList: React.FC<PopUpsListProps> = ({ currentStage }) => {
  const {
    currentPopUpKey,
    handlePopUpsRendering,
    hidePopUp,
    handleInstructionsPopUp,
    setCurrentPopUpKey,
  } = usePopUps();

  useEffect(() => {
    handlePopUpsRendering(currentStage);
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
        <InstructionsPopUp onNextButtonClick={handleInstructionsPopUp} />
      )}
      {currentPopUpKey === AvailablePopUps.aboutMe && (
        <AboutMePopUp onNextButtonClick={hidePopUp} />
      )}
      {currentPopUpKey === AvailablePopUps.jobExperience && (
        <JobExpPopUp onNextButtonClick={hidePopUp} />
      )}
      {currentPopUpKey === AvailablePopUps.sideWork && (
        <SideWorkPopUp onNextButtonClick={hidePopUp} />
      )}
      {currentPopUpKey === AvailablePopUps.contacts && (
        <ContactsPopUp onNextButtonClick={hidePopUp} />
      )}
      {currentPopUpKey === AvailablePopUps.aboutProject && (
        <AboutProjectPopUp onNextButtonClick={hidePopUp} />
      )}
    </>
  );
};
