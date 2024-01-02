import { SectionIds } from "src/components/headers/constants/sectionIds";
import { SIDE_HUSTLES } from "./constants/sideHustlesList";

export const SideHustles: React.FC = () => {
  return (
    <section id={SectionIds.sideHustles} className="py-4">
      <div className="md:max-w-[800px] m-auto">
        <h2 className="mb-8 text-center font-playFair text-4xl font-bold">
          Side hustles
        </h2>
        {SIDE_HUSTLES.map(
          ({ date, title, subtitle, description, photo }, index) => (
            <div
              key={`${title}_${index}`}
              className="project-box-shadow md:max-h-[400px] mb-8 flex justify-between md:flex-row flex-col-reverse md:rounded-3xl"
            >
              <div className="p-4 md:p-8 flex-1">
                {date && (
                  <p className="mb-4 md:mb-8 text-gray-300 font-raleway text-l md:text-l">
                    {date}
                  </p>
                )}
                <h3 className="font-playFair mb-1 text-xl font-bold">
                  {title}
                </h3>
                <h6 className="mb-4 md:mb-6 text-gray-300">{subtitle}</h6>
                <p className="font-nunito text-gray-300">{description}</p>
              </div>
              <img
                className="project-image object-cover max-h-[320px] md:max-h-none md:w-[50%] md:rounded-se-3xl md:rounded-ee-3xl"
                src={photo}
                alt={title}
                draggable={false}
              />
            </div>
          )
        )}
      </div>
      <a
        href={"assets/documents/Ieva.Kaleginiene.CV.pdf"}
        download="Ieva.Kaleginiene.CV.pdf"
        className="block m-auto"
      >
        <div className="block w-[250px] m-auto mt-8 profile-btn">
          Download CV
        </div>
      </a>
    </section>
  );
};
