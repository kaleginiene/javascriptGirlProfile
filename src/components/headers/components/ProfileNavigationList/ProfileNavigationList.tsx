import { useNavigate } from "react-router-dom";
import { RouteNames } from "src/routes/routeNames";
import { SectionIds } from "../../constants/sectionIds";

interface NavItem {
  sectionToScroll?: SectionIds;
  pageToNavigate?: RouteNames;
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
  {
    title: "3D profile",
    pageToNavigate: RouteNames.threeD,
  },
];

interface ProfileNavigationListProps {
  isOpenBurger: boolean;
  onNavItemClick: () => void;
}

export const ProfileNavigationList: React.FC<ProfileNavigationListProps> = ({
  isOpenBurger,
  onNavItemClick,
}) => {
  const navigate = useNavigate();

  const handleNavItemClick = (
    sectionId?: SectionIds,
    routeToNavigate?: RouteNames
  ) => {
    onNavItemClick();
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (routeToNavigate) {
      navigate(routeToNavigate);
    }
  };

  return (
    <div
      className={`${
        isOpenBurger
          ? "flex flex-col w-full bg-white py-8 pl-2 top-[50px] absolute"
          : "hidden"
      } md:flex gap-4 md:gap-8 font-raleway pr-2 md:pr-4`}
    >
      {NAV_LIST.map(({ sectionToScroll, title, pageToNavigate }, index) => (
        <h6
          key={`${title}_${index}`}
          className={`${
            isOpenBurger ? "text-left" : "text-center"
          } cursor-pointer md:text-base text-sm `}
          onClick={() => handleNavItemClick(sectionToScroll, pageToNavigate)}
        >
          {title}
        </h6>
      ))}
    </div>
  );
};
