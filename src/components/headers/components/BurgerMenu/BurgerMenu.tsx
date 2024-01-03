import "./burgerMenuStyles.css";

interface BurgerMenuProps {
  isOpenBurger: boolean;
  onBurgerMeniuClick: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isOpenBurger,
  onBurgerMeniuClick,
}) => {
  return (
    <div
      className={`menu-btn ${isOpenBurger && "open"}`}
      onClick={onBurgerMeniuClick}
    >
      <div className={`menu-btn__burger ${isOpenBurger}`} />
    </div>
  );
};
