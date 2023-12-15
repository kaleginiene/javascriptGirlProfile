import { ProfileFooter, ProfileHeader } from "src/components";
import {
  AboutMe,
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
    <AboutMe />
    <ProfileFooter />
  </>
);

export default Profile;
