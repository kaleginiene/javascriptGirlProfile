import React, { useEffect, useState } from "react";
import {
  AboutMePopUp,
  InstructionsPopUp,
  IntroPopUp,
  JobExpPopUp,
  SideWorkPopUp,
} from "./components";
import { AvailablePopUps } from "./popUpTypes";
import { ContactsPopUp } from "./components/ContactsPopUp";

interface PopUpsListProps {
  currentStage: number | null;
}

export const PopUpsList: React.FC<PopUpsListProps> = ({ currentStage }) => {
  const [currentPopUpKey, setCurrentPopUpKey] =
    useState<AvailablePopUps | null>(AvailablePopUps.initial);
  const [showedPopUps, setShowedPopUps] = useState<AvailablePopUps[]>([]);

  useEffect(() => {
    if (
      currentStage === 1 &&
      currentPopUpKey !== AvailablePopUps.initial &&
      !showedPopUps.includes(AvailablePopUps.aboutMe)
    ) {
      setCurrentPopUpKey(AvailablePopUps.aboutMe);
      setShowedPopUps((prev) => [...prev, AvailablePopUps.aboutMe]);
    } else if (
      currentStage === 2 &&
      !showedPopUps.includes(AvailablePopUps.jobExperience)
    ) {
      setCurrentPopUpKey(AvailablePopUps.jobExperience);
      setShowedPopUps((prev) => [...prev, AvailablePopUps.jobExperience]);
    } else if (
      currentStage === 3 &&
      !showedPopUps.includes(AvailablePopUps.sideWork)
    ) {
      setCurrentPopUpKey(AvailablePopUps.sideWork);
      setShowedPopUps((prev) => [...prev, AvailablePopUps.sideWork]);
    } else if (currentStage === 4) {
      setCurrentPopUpKey(AvailablePopUps.contacts);
      setShowedPopUps((prev) => [...prev, AvailablePopUps.contacts]);
      showedPopUps.shift();
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
          onNextButtonClick={() => {
            setCurrentPopUpKey(AvailablePopUps.aboutMe);
            setShowedPopUps((prev) => [...prev, AvailablePopUps.aboutMe]);
          }}
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
      {currentPopUpKey === AvailablePopUps.contacts && (
        <ContactsPopUp onNextButtonClick={() => setCurrentPopUpKey(null)} />
      )}
    </>
  );
};
