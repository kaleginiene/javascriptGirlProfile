import { ReactNode } from "react";
import profilePhoto from "../../../assets/images/ieva.jpg";

interface BasePopUpProps {
  textBox?: ReactNode;
  ctaBox?: ReactNode;
}

export const BasePopUp: React.FC<BasePopUpProps> = ({ textBox, ctaBox }) => {
  return (
    <div className="w-full info-box">
      <div className="gap-3 flex flex-auto items-start">
        <img
          className="w-20 rounded-lg"
          src={profilePhoto}
          alt="author photo"
        />
        {textBox && <div>{textBox}</div>}
      </div>
      {ctaBox && <div className="flex justify-center py-4 pb-2">{ctaBox}</div>}
    </div>
  );
};
