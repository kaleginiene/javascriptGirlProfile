import { Dispatch, SetStateAction, useState } from "react";

import { AvailablePopUps } from "./popUpTypes";

interface UsePopUpsReturn {
  currentPopUpKey: AvailablePopUps | null;
  showedPopUps: AvailablePopUps[];
  handleInstructionsPopUp: () => void;
  handlePopUpsRendering: (currentStage: number | null) => void;
  hidePopUp: () => void;
  setCurrentPopUpKey: Dispatch<SetStateAction<AvailablePopUps | null>>;
}

export const usePopUps = (): UsePopUpsReturn => {
  const [currentPopUpKey, setCurrentPopUpKey] =
    useState<AvailablePopUps | null>(AvailablePopUps.initial);
  const [showedPopUps, setShowedPopUps] = useState<AvailablePopUps[]>([]);

  const handlePopUpsRendering = (currentStage: number | null): void => {
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
  };

  const hidePopUp = (): void => {
    setCurrentPopUpKey(null);
  };

  const handleInstructionsPopUp = (): void => {
    setCurrentPopUpKey(AvailablePopUps.aboutMe);
    setShowedPopUps((prev) => [...prev, AvailablePopUps.aboutMe]);
  };

  return {
    currentPopUpKey,
    showedPopUps,
    handleInstructionsPopUp,
    handlePopUpsRendering,
    hidePopUp,
    setCurrentPopUpKey,
  };
};
