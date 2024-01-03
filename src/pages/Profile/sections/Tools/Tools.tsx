import {
  LANGS_FRAMEWORKS,
  PACKAGES,
  STYLING_TOOLS,
  TOOL,
} from "./constants/toolsList";

const renderCard = ({ icon, backgroundColor, title }: TOOL): JSX.Element => (
  <div
    key={title}
    className={`p-2 flex flex-col justify-between rounded-md text-center ${backgroundColor}`}
  >
    <img className="m-auto" src={icon} width={20} alt="React Icon" />
    <p className="font-raleway font-bold text-white text-sm">{title}</p>
  </div>
);

export const Tools: React.FC = () => {
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-8 text-center font-playFair text-4xl font-bold">
          Technical skills
        </h2>
        <div className="container px-4 m-auto">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mb-4">
            {LANGS_FRAMEWORKS.map((item) => renderCard(item))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mb-4">
            {PACKAGES.map((item) => renderCard(item))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mb-4">
            {STYLING_TOOLS.map((item) => renderCard(item))}
          </div>
        </div>
      </div>
    </section>
  );
};
