import { SocialMedia } from "../../../constants/contacts";
import heroImage from "../../../assets/images/profile/hero_photo.png";

export const Hero: React.FC = () => {
  return (
    <section className="font-nunito">
      <div className="md:max-w-[1200px] md:min-h-[500px] m-auto flex items-center">
        <div className="max-w-[550px]">
          <p className="uppercase text-2xl mb-[12px] text-pink-300 font-bold">
            JavaScript engineer
          </p>
          <h1 className="font-playFair text-6xl mb-4 font-bold leading-tight">
            Hello, my name
            <br />
            is Ieva Kaleginienė
          </h1>
          <p className="mb-2 text-gray-300 text-2xl">
            I switched from sales to programming 4 years ago and still can't get
            enough! I am based in Vilnius, Lithuania.
          </p>
          <p className="text-gray-300 text-2xl mb-8">
            More of my professional content you will find on Linkedin
          </p>
          <a href={SocialMedia.linkedin} target="_blank">
            <div className="w-[150px] profile-btn">Linkedin</div>
          </a>
        </div>
      </div>
      <img
        className="absolute max-w-[772px] top-0 right-0 xxl:right-28 z-[-1]"
        src={heroImage}
        alt="Ieva Kaleginiene photo"
      />
    </section>
  );
};
