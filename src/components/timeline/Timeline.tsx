import { ReactElement } from "react";

export interface TimeLineEvent {
  date: string;
  title: string;
  description: ReactElement;
}

interface TimeLineProps {
  timeLineEvents: TimeLineEvent[];
}

export const TimeLine: React.FC<TimeLineProps> = ({ timeLineEvents }) => {
  if (!timeLineEvents) return null;

  return (
    <ol className="relative max-w-full border-s border-pink-300 dark:border-gray-700">
      {timeLineEvents.map(({ date, title, description }) => (
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-pink-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:pink-300"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <> {description}</>
        </li>
      ))}
    </ol>
  );
};
