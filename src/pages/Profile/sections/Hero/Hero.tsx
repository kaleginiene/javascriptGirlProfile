import { SocialMedia } from "../../../../constants/contacts";
import heroImage from "../../../../assets/images/profile/hero_photo.png";

export const Hero: React.FC = () => {
  return (
    <section className="flex md:block flex-col-reverse font-nunito">
      <div className="md:max-w-[1200px] md:min-h-[500px] m-auto md:flex items-center">
        <div className="md:max-w-[570px] px-4 text-center md:text-left">
          <p className="uppercase text-2xl mb-[12px] text-pink-300 font-bold mt-6 md:mt-0">
            JavaScript engineer
          </p>
          <h1 className="font-playFair text-4xl md:text-6xl mb-4 font-bold leading-tight ">
            Hello World,
            <br /> my name is <br />
            Ieva Kaleginienė
          </h1>
          <p className="mb-2 text-gray-300 text-xl md:text-2xl">
            I switched from sales to programming 4 years ago and still can't get
            enough! I am based in Vilnius, Lithuania.
          </p>
          <p className="text-gray-300 text-xl md:text-2xl mb-8">
            More of my professional content you will find on Linkedin
          </p>
          <a href={SocialMedia.linkedin} target="_blank">
            <div className="w-[250px] m-auto md:m-0 profile-btn">
              Let's connect on Linkedin
            </div>
          </a>
        </div>
      </div>
      <div className="md:absolute md:max-w-[800px] md:top-0 md:right-0 xxl:right-28 z-[-1]">
        <img src={heroImage} alt="Ieva Kaleginiene photo" />
      </div>
    </section>
  );
};
