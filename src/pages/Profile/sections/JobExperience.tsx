import { TimeLine } from "../../../components";
import workingImage from "../../../assets/images/profile/smiling_transparent.png";
import { JOB_EXPERIENCE } from "../constants/jobExperience";

export const JobExperience: React.FC = () => (
  <section className="py-8">
    <div className="container px-4">
      <h2 className="mb-8 text-center font-playFair text-4xl font-bold">
        Work Experience
      </h2>
    </div>
    <div className="container px-4 md:flex md:justify-between md:items-start font-raleway">
      <img className="hidden md:block md:max-w-[450px]" src={workingImage} />
      <TimeLine timeLineEvents={JOB_EXPERIENCE} />
    </div>
  </section>
);
