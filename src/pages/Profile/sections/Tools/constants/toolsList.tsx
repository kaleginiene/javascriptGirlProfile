import jsIcon from "../../../../../assets/icons/profile/tools/jsIcon.svg";
import tsIcon from "../../../../../assets/icons/profile/tools/tsIcon.svg";
import reactIcon from "../../../../../assets/icons/profile/tools/reactIcon.svg";
import nextJsIcon from "../../../../../assets/icons/profile/tools/nextjs.svg";
import gatsbyJsIcon from "../../../../../assets/icons/profile/tools/gatsbyIcon.svg";
import htmlIcon from "../../../../../assets/icons/profile/tools/htmlIcon.svg";
import cssIcon from "../../../../../assets/icons/profile/tools/cssIcon.svg";
import styledIcon from "../../../../../assets/icons/profile/tools/styledComponentsIcon.svg";
import sassIcon from "../../../../../assets/icons/profile/tools/sassIcon.svg";
import tailwindIcon from "../../../../../assets/icons/profile/tools/tailwindIcon.svg";
import materialIcon from "../../../../../assets/icons/profile/tools/materialIcon.svg";
import reduxIcon from "../../../../../assets/icons/profile/tools/redux.svg";
import restIcon from "../../../../../assets/icons/profile/tools/restAPI.svg";
import axiosIcon from "../../../../../assets/icons/profile/tools/axiosIcon.svg";
import figmaIcon from "../../../../../assets/icons/profile/tools/figmaIcon.svg";
import threeJsIcon from "../../../../../assets/icons/profile/tools/threejsIcon.svg";
import firebaseIcon from "../../../../../assets/icons/profile/tools/firebaseIcon.svg";

export interface TOOL {
  icon: string;
  title: string;
  backgroundColor: string;
}

export const LANGS_FRAMEWORKS: TOOL[] = [
  {
    icon: jsIcon,
    title: "JavaScript",
    backgroundColor: "bg-indigo-400",
  },
  {
    icon: tsIcon,
    title: "TypeScript",
    backgroundColor: "bg-indigo-400",
  },
  {
    icon: htmlIcon,
    title: "HTML",
    backgroundColor: "bg-indigo-400",
  },
  {
    icon: reactIcon,
    title: "React",
    backgroundColor: "bg-indigo-400",
  },
  {
    icon: reactIcon,
    title: "React Native",
    backgroundColor: "bg-indigo-400",
  },
  {
    icon: nextJsIcon,
    title: "Next JS",
    backgroundColor: "bg-indigo-400",
  },

  {
    icon: gatsbyJsIcon,
    title: "Gatsby JS",
    backgroundColor: "bg-indigo-400",
  },
];

export const STYLING_TOOLS: TOOL[] = [
  {
    icon: cssIcon,
    title: "CSS",
    backgroundColor: "bg-pink-400",
  },
  {
    icon: styledIcon,
    title: "Styled components",
    backgroundColor: "bg-pink-400",
  },
  {
    icon: sassIcon,
    title: "SASS",
    backgroundColor: "bg-pink-400",
  },
  {
    icon: tailwindIcon,
    title: "TailWind",
    backgroundColor: "bg-pink-400",
  },
  {
    icon: materialIcon,
    title: "Material UI",
    backgroundColor: "bg-pink-400",
  },
  {
    icon: figmaIcon,
    title: "Figma",
    backgroundColor: "bg-pink-400",
  },
];

export const PACKAGES: TOOL[] = [
  {
    icon: threeJsIcon,
    title: "Three JS",
    backgroundColor: "bg-purple-500",
  },
  {
    icon: reduxIcon,
    title: "Redux",
    backgroundColor: "bg-purple-500",
  },
  {
    icon: restIcon,
    title: "REST API",
    backgroundColor: "bg-purple-500",
  },
  {
    icon: axiosIcon,
    title: "Axios",
    backgroundColor: "bg-purple-500",
  },
  {
    icon: firebaseIcon,
    title: "FireBase",
    backgroundColor: "bg-purple-500",
  },
];
