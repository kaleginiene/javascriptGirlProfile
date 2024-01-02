import { ProfileFooter, ProfileHeader } from "src/components";
import {
  Hero,
  JobExperience,
  SideHustles,
  Statistics,
  Tools,
} from "./sections";

const Profile: React.FC = () => (
  <>
    <ProfileHeader />
    <Hero />
    <Statistics />
    <JobExperience />
    <Tools />
    <SideHustles />
    <ProfileFooter />
  </>
);

export default Profile;
