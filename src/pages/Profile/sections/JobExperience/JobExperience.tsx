import { TimeLine } from "src/components";
import workingImage from "src/assets/images/profile/smiling_transparent.webp";
import { SectionIds } from "src/components/headers/constants/sectionIds";

import { JOB_EXPERIENCE } from "./constants/jobExperience";

export const JobExperience: React.FC = () => (
  <section id={SectionIds.jobExperience} className="py-8">
    <div className="container px-4">
      <h2 className="mb-8 text-center font-playFair text-4xl font-bold">
        Work Experience
      </h2>
    </div>
    <div className="container px-4 md:flex md:justify-between md:items-start font-raleway">
      <img
        className="hidden md:block md:max-w-[450px]"
        src={workingImage}
        draggable={false}
      />
      <TimeLine timeLineEvents={JOB_EXPERIENCE} />
    </div>
    <a
      href={"assets/documents/Ieva.Kaleginiene.CV.pdf"}
      download="Ieva.Kaleginiene.CV.pdf"
      className="block m-auto"
    >
      <div className="block w-[250px] m-auto mt-8 profile-btn">Download CV</div>
    </a>
  </section>
);
