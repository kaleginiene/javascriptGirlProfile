import { ProfileHeader } from "../../components";
import { Hero, Statistics } from "./sections";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <Hero />
      <Statistics />
    </>
  );
};

export default Profile;
