import { ProfileHeader } from "../../components";
import { Hero, JobExperience, Statistics, Tools } from "./sections";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <Hero />
      <Statistics />
      <JobExperience />
      <Tools />
    </>
  );
};

export default Profile;
