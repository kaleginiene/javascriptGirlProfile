import { STATISTICS } from "../constants/statistics";

export const Statistics: React.FC = () => {
  return (
    <div className="bg-pink-100 w-full mt-11 py-4 px-2 md:px-0">
      <div className="container flex gap-2 md:gap-0  items-center justify-around font-raleway">
        {STATISTICS.map(({ statValue, title }, index) => (
          <div key={`${title}_${index}`} className="text-center text-gray-0">
            <h2 className="text-xl md:text-3xl font-bold ">{statValue}</h2>
            <p className="text-xs font-medium">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
