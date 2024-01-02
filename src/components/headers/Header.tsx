import { Link } from "react-router-dom";
import { RouteNames } from "../../routes/routeNames";

export const Header: React.FC = () => {
  return (
    <header className="absolute z-10 right-28 top-5">
      <Link className="text-white font-medium" to={RouteNames.home}>
        Classic profile
      </Link>
    </header>
  );
};
