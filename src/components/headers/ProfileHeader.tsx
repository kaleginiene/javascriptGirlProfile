import logo from "../../assets/images/logo.png";

export const ProfileHeader: React.FC = () => {
  return (
    <header>
      <nav className="md:max-w-[1200px] flex justify-between items-center m-auto py-1 mb-3">
        <img className="w-[100px]" src={logo} />
        <div className="flex gap-8 font-raleway">
          <h6>About Me</h6>
          <h6>Job Experience</h6>
          <h6>Side Hustles</h6>
        </div>
      </nav>
    </header>
  );
};
