import { ProfileHeader } from "../../components";
import {
  Hero,
  JobExperience,
  SideHustles,
  Statistics,
  Tools,
} from "./sections";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <Hero />
      <Statistics />
      <JobExperience />
      <Tools />
      <SideHustles />
    </>
  );
};

export default Profile;
