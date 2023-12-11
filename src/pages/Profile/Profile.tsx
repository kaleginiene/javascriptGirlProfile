import { ProfileHeader } from "../../components";
import { Hero, JobExperience, Statistics } from "./sections";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <Hero />
      <Statistics />
      <JobExperience />
    </>
  );
};

export default Profile;
