import { ReactNode } from "react";
import profilePhoto from "src/assets/images/ieva.webp";

interface BasePopUpProps {
  textBox?: ReactNode;
  ctaBox?: ReactNode;
  hideImage?: boolean;
}

export const BasePopUp: React.FC<BasePopUpProps> = ({
  textBox,
  ctaBox,
  hideImage = false,
}) => {
  return (
    <div className="w-full info-box">
      <div className={!hideImage ? `gap-3 flex flex-auto items-start` : ""}>
        {!hideImage && (
          <img
            className="w-20 rounded-lg"
            src={profilePhoto}
            alt="author photo"
          />
        )}
        {textBox && <div>{textBox}</div>}
      </div>
      {ctaBox && <div className="flex justify-center py-4 pb-2">{ctaBox}</div>}
    </div>
  );
};
