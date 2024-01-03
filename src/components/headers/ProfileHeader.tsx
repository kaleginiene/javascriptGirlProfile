import logo from "src/assets/images/logo.webp";
import { BurgerMenu, ProfileNavigationList } from "./components";
import { useState } from "react";

export const ProfileHeader: React.FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  const handleBurgerClick = (): void => {
    setIsOpenBurger((prev) => !prev);
  };

  return (
    <header>
      <nav
        className={`${
          isOpenBurger && "pl-8"
        } container gap-4 flex justify-between items-center px-4 md:px-0 py-1 mb-3`}
      >
        <img className="w-[80px] md:w-[100px]" src={logo} />
        <ProfileNavigationList
          onNavItemClick={handleBurgerClick}
          isOpenBurger={isOpenBurger}
        />
        <div className="block md:hidden">
          <BurgerMenu
            isOpenBurger={isOpenBurger}
            onBurgerMeniuClick={handleBurgerClick}
          />
        </div>
      </nav>
    </header>
  );
};
