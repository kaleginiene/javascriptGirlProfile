// import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.webp";
import { SectionIds } from "./constants/sectionIds";
import { Link } from "react-router-dom";
import { RouteNames } from "src/routes/routeNames";
// import { RouteNames } from "src/routes/routeNames";

interface NavItem {
  sectionToScroll: SectionIds;
  title: string;
}

const NAV_LIST: NavItem[] = [
  {
    sectionToScroll: SectionIds.jobExperience,
    title: "Work experience",
  },
  {
    sectionToScroll: SectionIds.sideHustles,
    title: "Side hustles",
  },
];

export const ProfileHeader: React.FC = () => {
  const handleClickScroll = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <nav className="container flex justify-between items-center py-1 mb-3">
        <img className="w-[100px]" src={logo} />
        <div className="flex gap-8 font-raleway pr-4">
          {NAV_LIST.map(({ sectionToScroll, title }, index) => (
            <h6
              key={`${title}_${index}`}
              className="cursor-pointer"
              onClick={() => handleClickScroll(sectionToScroll)}
            >
              {title}
            </h6>
          ))}
          <Link to={RouteNames.threeD}>
            <h6 className="cursor-pointer">3D profile </h6>
          </Link>
        </div>
      </nav>
    </header>
  );
};
