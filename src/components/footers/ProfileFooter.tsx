import { Contacts, SocialMedia } from "../../constants/contacts";
import linkedinIcon from "../../assets/icons/profile/contacts/linkedin.svg";
import mailIcon from "../../assets/icons/profile/contacts/mailIcon.svg";

export const ProfileFooter: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex gap-2 mb-2 justify-center">
          <a
            className="cursor-pointer"
            href={SocialMedia.linkedin}
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a className="cursor-pointer" href={`mailto:${Contacts.email}`}>
            <img src={mailIcon} alt="Email icon" />
          </a>
        </div>
        <p className="text-center text-s text-gray-300 font-raleway">
          Ieva Kaleginienė, 2024
        </p>
      </div>
    </footer>
  );
};
